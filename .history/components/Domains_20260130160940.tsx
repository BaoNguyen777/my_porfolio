export function Domains() {
const domains = [
{ title: "Corporate Website", desc: "Website công ty, giới thiệu dịch vụ & thương hiệu" },
{ title: "Landing Page", desc: "Trang bán hàng, marketing, chuyển đổi cao" },
{ title: "E-commerce", desc: "Website bán hàng, quản lý sản phẩm & thanh toán" },
{ title: "Booking System", desc: "Đặt phòng, dịch vụ, quản lý lịch & user" },
{ title: "Portfolio", desc: "Website cá nhân, branding developer" },
{ title: "Admin Dashboard", desc: "Hệ thống quản trị, biểu đồ, phân quyền" },
];


return (
<section className="mx-auto mt-32 w-[92%]">
<h2 className="text-center text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
Domains
</h2>
<p className="mt-3 text-center text-slate-400">
Các lĩnh vực website tôi đã triển khai thực tế
</p>


<div className="mt-12 grid gap-6 md:grid-cols-3">
{domains.map(d => (
<div key={d.title} className="rounded-xl border border-indigo-500/20 bg-black/40 p-6 glow transition hover:scale-[1.03]">
<h3 className="text-xl font-semibold text-indigo-300">{d.title}</h3>
<p className="mt-3 text-sm text-slate-400 leading-relaxed">{d.desc}</p>
</div>
))}
</div>
</section>
);
}