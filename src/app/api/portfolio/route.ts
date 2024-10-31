/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const portfolios = await prisma.portfolio.findMany({
      include: {
        stocks: true,
      },
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
  try {
    const body = await request.json();
    const portfolio = await prisma.portfolio.create({
      data: body,
    });

    return NextResponse.json(portfolio);
  } catch (error) {
    return NextResponse.json(
      { error: '포트폴리오를 생성하지 못했습니다.' },
      { status: 500 }
    );
  }
}