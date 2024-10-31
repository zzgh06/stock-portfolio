/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();

  if (!session?.user) {
    return NextResponse.json({ error: '승인되지 않은 요청입니다.' }, { status: 401 });
  }

  try {
    const portfolios = await prisma.portfolio.findMany({
      where: {
        userId: session.user.id
      },
      include: {
        stocks: true
      }
    });

    return NextResponse.json(portfolios);
  } catch (error) {
    return NextResponse.json(
      { error: '포트폴리오를 가져오지 못했습니다' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const session = await getServerSession();

  if (!session?.user) {
    return NextResponse.json({ error: '승인되지 않은 요청입니다.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const portfolio = await prisma.portfolio.create({
      data: {
        ...body,
        userId: session.user.id
      }
    });

    return NextResponse.json(portfolio);
  } catch (error) {
    return NextResponse.json(
      { error: '포트폴리오를 생성하지 못했습니다.' },
      { status: 500 }
    );
  }
}