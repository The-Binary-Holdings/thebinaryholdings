import { inviteMemberDAO } from '@/common/DAO/InviteMember.dao';
import { sponsorDAO } from '@/common/DAO/Sponsor.dao';
import { userDAO } from '@/common/DAO/User.dao';
import { USER_ROLE } from '@/common/enum/enum';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const searchParams = await req.nextUrl.searchParams;
  const token = searchParams.get('token');
  const url = req.nextUrl.clone();
  if (token) {
    const tokenInfo: any = await inviteMemberDAO.verifyInvitation(token);
    if (tokenInfo) {
      const { email, name: username, role, sender_id } = tokenInfo;
      const updated = await userDAO.create({
        email,
        username,
        role,
        invited_by: sender_id,
      });
      if (updated) {
        await inviteMemberDAO.updateInvite(tokenInfo.id, 'accepted');
        //check if sender is sponsor and user is judge
        if (role === USER_ROLE.JUDGE) {
          const { data } = await userDAO.getById(sender_id);
          if (data && data.role === USER_ROLE.SPONSOR) {
            await sponsorDAO.addJudge(sender_id, updated.id);
          }
        }

        // url.pathname = `/auth/sign-in?email=${tokenInfo.email}`;
        // return NextResponse.redirect(url);
      } else {
        //?code=100&message=Failed to create user!
      }
      url.pathname = '/auth/sign-in';
      return NextResponse.redirect(url);
    }
  } else {
    //?code=100&message=Token is invalid!
    url.pathname = '/auth/sign-in';
    return NextResponse.redirect(url);
  }
}
