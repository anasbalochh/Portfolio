import React from "react";

type InfoRow = {
  label: string;
  value: React.ReactNode;
  alignTop?: boolean;
};

const galleryImages = [
  "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1457269449834-928af64c684d?auto=format&fit=crop&w=600&q=80",
];

const staffMembers = [
  {
    name: "りさ",
    role: "ママ",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "あや",
    role: "キャスト",
    image:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "さゆり",
    role: "キャスト",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
];

const actionButtons = [
  { label: "行きたい", primary: true },
  { label: "電話する" },
  { label: "口コミを書く" },
  { label: "公式サイトを見る" },
];

const basicInfo: InfoRow[] = [
  { label: "店名", value: "ステラグ 05" },
  { label: "住所", value: "東京都港区赤坂3-10-6 赤坂ステラタワー 5F" },
  { label: "アクセス", value: "赤坂駅 1番出口 徒歩3分 / 溜池山王駅 徒歩6分" },
  { label: "営業時間", value: "19:00〜翌2:00" },
  { label: "定休日", value: "日曜・祝日" },
  { label: "席数", value: "カウンター8席 / テーブル6卓 (最大45名)" },
  {
    label: "電話番号",
    value: (
      <a
        href="tel:0334567890"
        className="inline-flex items-center gap-2 rounded-full border border-[#cde6c8] bg-[#eef8ec] px-3 py-1 text-sm font-medium text-[#1f7a3f]"
      >
        <span className="size-2 rounded-full bg-[#1f7a3f]" />
        03-3456-7890
      </a>
    ),
  },
  {
    label: "内観",
    value: (
      <div className="flex h-40 w-full items-center justify-center rounded-2xl border border-dashed border-[#c6d7c5] bg-[#f5f9f2] text-xs tracking-[0.4em] text-[#9cb2a0]">
        IMAGE PLACEHOLDER
      </div>
    ),
    alignTop: true,
  },
  {
    label: "備考",
    value: "貸切ご相談ください / Wi-Fi完備 / カラオケあり",
  },
];

const facilityInfo: InfoRow[] = [
  {
    label: "料金システム",
    value: (
      <ul className="space-y-1 text-sm text-[#263a2c]">
        <li>セット料金 60分 4,000円 (税・サ別)</li>
        <li>延長 30分 2,000円 / 延長 60分 3,000円</li>
        <li>カラオケ歌い放題 +1,000円</li>
      </ul>
    ),
    alignTop: true,
  },
  { label: "サービス料", value: "20% / カード手数料 5%" },
  {
    label: "設備",
    value: "カラオケ / モニター / Free Wi-Fi / 空気清浄機",
  },
  {
    label: "支払方法",
    value: "現金 / 各種クレジットカード / QR決済",
  },
];

const recruitInfo: InfoRow[] = [
  {
    label: "募集職種",
    value: "フロアレディ / カウンタースタッフ",
  },
  {
    label: "勤務時間",
    value: "19:00〜翌2:00 (1日3h〜OK) / 週2日から応相談",
  },
  {
    label: "待遇",
    value: (
      <ul className="space-y-1 text-sm text-[#263a2c]">
        <li>日払い可 / ドレス・送り無料</li>
        <li>ノルマなし / 各種バックあり / 体験入店歓迎</li>
      </ul>
    ),
    alignTop: true,
  },
  {
    label: "応募方法",
    value: "公式LINE または お電話にて 24時間受付",
  },
];

const dataHighlights = [
  {
    tag: "DATA 01",
    title: "常連比率 72%",
    description: "平日はビジネス層、週末はカップル利用が多数。落ち着いた雰囲気で初めての方も安心。",
  },
  {
    tag: "DATA 02",
    title: "平均予算 6,800円",
    description: "チャージ込みで分かりやすい価格設定。ボトルキープでさらにお得に楽しめます。",
  },
  {
    tag: "DATA 03",
    title: "口コミ評価 3.5/5",
    description: "接客・雰囲気が高評価。カラオケ設備の充実度もリピーターに人気です。",
  },
];

const coupons = [
  {
    title: "初回セット 60分 2,500円",
    description: "初めてご来店の方限定。飲み放題・カラオケ付きでお得に体験いただけます。",
    code: "STELLA-01",
    expiry: "2025.12.31",
  },
  {
    title: "ボトルキープ 10% OFF",
    description: "事前予約またはご紹介のお客様限定。人気銘柄も対象、当日カラオケ無料サービス。",
    code: "STELLA-BTL",
    expiry: "2025.09.30",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f6f0] px-4 py-12">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-[#e0e8dc] bg-white shadow-[0_24px_80px_rgba(20,40,28,0.12)]">
        <div className="space-y-12 p-10 lg:p-12">
          <section className="flex flex-col gap-10 lg:flex-row">
            <div className="w-full space-y-6 lg:max-w-sm">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.45em] text-[#8fa191]">
                  SNACK GUIDE
                </span>
                <h1 className="text-3xl font-semibold tracking-tight text-[#1b3123]">ステラグ 05</h1>
                <p className="text-sm leading-relaxed text-[#5f7060]">
                  東京都港区赤坂3-10-6 赤坂ステラタワー 5F / 赤坂見附駅より徒歩3分
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-1 min-w-[220px] items-center gap-3 rounded-3xl border border-[#cde6c8] bg-[#edf7ec] px-4 py-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[20px] bg-white text-lg font-semibold text-[#1f7a3f]">
                    3.5
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#8fa191]">口コミ</p>
                    <p className="text-sm font-medium text-[#273b2c]">レビュー 128件</p>
                  </div>
                </div>
                <p className="text-xs text-[#93a49a]">更新日 2025.05.12</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {actionButtons.map((button) => (
                  <button
                    key={button.label}
                    className={`rounded-2xl border px-4 py-2 text-sm font-medium tracking-[0.08em] transition-colors ${
                      button.primary
                        ? "border-[#1f7a3f] bg-[#1f7a3f] text-white hover:bg-[#196437]"
                        : "border-[#dbe8d7] bg-white text-[#2a3c2f] hover:bg-[#f2f7f1]"
                    }`}
                  >
                    {button.label}
                  </button>
                ))}
              </div>

              <p className="text-sm leading-relaxed text-[#526456]">
                赤坂の中心にある落ち着いた大人の隠れ家。明るいママとキャストが、
                初めての方にも丁寧にご案内いたします。季節のカクテルとともに、
                ゆったりとした時間をお過ごしください。
              </p>
            </div>

            <div className="flex-1 space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
                <img
                  src={galleryImages[0]}
                  alt="店内の様子"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-xs font-medium text-[#1f3625]">
                  <span className="size-2 rounded-full bg-[#60b184]" />
                  PHOTO GALLERY
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
                {galleryImages.slice(1).map((image, index) => (
                  <div
                    key={image}
                    className="group relative h-20 overflow-hidden rounded-2xl border border-[#dbe8d7]"
                  >
                    <img
                      src={image}
                      alt={`店内サムネイル ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          <section className="space-y-6">
            <SectionHeading title="ママ・キャスト" note="STAFF" />
            <div className="flex flex-wrap gap-6">
              {staffMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center gap-3">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-[#f2f7ef] shadow-[0_10px_25px_rgba(26,42,33,0.1)]">
                    <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-[#203427]">{member.name}</p>
                    <p className="text-xs uppercase tracking-[0.4em] text-[#92a298]">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          <section className="space-y-8">
            <SectionHeading title="店舗基本情報" note="BASIC INFORMATION" />
            <div className="grid gap-10 lg:grid-cols-5">
              <InfoCard
                title="店舗基本情報"
                note="DETAILS"
                rows={basicInfo}
                className="lg:col-span-3"
              />
              <div className="space-y-10 lg:col-span-2">
                <InfoCard title="料金・設備" note="SERVICE" rows={facilityInfo} />
                <InfoCard title="求人・店舗" note="RECRUIT" rows={recruitInfo} />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <SectionHeading title="データ" note="HIGHLIGHTS" />
            <div className="grid gap-4 md:grid-cols-3">
              {dataHighlights.map((item) => (
                <div
                  key={item.tag}
                  className="rounded-2xl border border-[#d4e4d2] bg-[#f3f8f0] p-5 shadow-[0_14px_30px_rgba(24,39,29,0.08)]"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-[#8fa191]">{item.tag}</p>
                  <h3 className="mt-3 text-lg font-semibold text-[#1c3322]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#576759]">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <SectionHeading title="クーポン" note="COUPON" />
            <div className="grid gap-4 md:grid-cols-2">
              {coupons.map((coupon) => (
                <div
                  key={coupon.code}
                  className="relative overflow-hidden rounded-3xl border border-[#124739] bg-gradient-to-br from-[#195646] via-[#0f4437] to-[#09372c] p-6 text-white shadow-[0_22px_45px_rgba(10,40,33,0.45)]"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/60">
                    <span>COUPON</span>
                    <span>{coupon.expiry}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">{coupon.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{coupon.description}</p>
                  <div className="mt-6 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs tracking-[0.4em]">
                      {coupon.code}
                    </span>
                    <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0e4638] transition-colors hover:bg-[#f2f2f2]">
                      予約する
                    </button>
                  </div>
                  <span className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/20 opacity-30" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ title, note }: { title: string; note?: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 rounded-full bg-[#9dc6a2]" />
        <span className="text-xs uppercase tracking-[0.4em] text-[#8fa191]">{note}</span>
      </div>
      <h2 className="text-xl font-semibold tracking-wide text-[#1b3123]">{title}</h2>
    </div>
  );
}

function InfoCard({
  title,
  note,
  rows,
  className,
}: {
  title: string;
  note?: string;
  rows: InfoRow[];
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-[#dce6d8] bg-[#fbfdfb] shadow-[0_16px_40px_rgba(24,39,29,0.08)] ${
        className ?? ""
      }`}
    >
      <div className="border-b border-[#e5ede1] bg-[#f4f9f0] px-6 py-5">
        <p className="text-xs uppercase tracking-[0.4em] text-[#8fa191]">{note}</p>
        <h3 className="mt-2 text-lg font-semibold text-[#1b3123]">{title}</h3>
      </div>
      <dl className="divide-y divide-[#ecf2e8]">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-1 gap-2 px-6 py-4 md:grid-cols-[140px_1fr]"
          >
            <dt className="text-xs uppercase tracking-[0.32em] text-[#9aa89f] md:pt-1">{row.label}</dt>
            <dd
              className={`text-sm leading-relaxed text-[#263a2c] ${
                row.alignTop ? "md:self-start" : ""
              }`}
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-dashed border-[#dde6d8]" />;
}