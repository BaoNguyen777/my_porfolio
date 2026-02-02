"use client";


const items = [
  {
    label: "EMAIL",
    value: "nhivo1604230@gmail.com",
    status: "ACTIVE",
  },
  {
    label: "PHONE",
    value: "+84 837 885 985",
    status: "ACTIVE",
  },
  {
    label: "LOCATION",
    value: "Ho Chi Minh City, Vietnam",
    status: "ONLINE",
  },
];

function ContactInfo() {
  return (
    <div className="space-y-4">
      <h3 className="text-white font-semibold mb-4">
        portfolio.contact.contact_info
      </h3>

      {items.map((item) => (
        <div
          key={item.label}
          className="group rounded-xl border border-white/10 bg-white/5 p-4 transition-all
                     hover:border-green-400/60 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">{item.label}</p>
              <p className="text-white font-medium">{item.value}</p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400">
              {item.status}
            </span>
          </div>
        </div>
      ))}

      {/* Code block */}
      <div className="mt-6 rounded-xl bg-black/40 border border-white/10 p-4 text-sm text-gray-300 font-mono">
        <p className="text-gray-500 mb-2">developer.js</p>
        <pre>
{`const developer = {
  name: "Nguyễn Chí Bảo",
  role: "Fullstack Developer",
  location: "Ho Chi Minh City, Vietnam",
  skills: ["Next.js", "React", "NodeJS", "Java"]
};`}
        </pre>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div
      className="rounded-2xl border border-green-400/30 bg-gradient-to-b
                 from-white/5 to-transparent p-6
                 hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]
                 transition-all"
    >
      <p className="text-green-400 font-mono mb-6">
        &gt; Hello, World! Ready to collaborate?
      </p>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="portfolio.contact.form.name *" />
          <Input placeholder="portfolio.contact.form.email *" />
        </div>

        <Input placeholder="portfolio.contact.form.subject *" />

        <textarea
          placeholder="portfolio.contact.form.message *"
          className="w-full h-32 rounded-lg bg-white/5 border border-white/10
                     px-4 py-3 text-white placeholder-gray-500
                     focus:outline-none focus:border-green-400/60"
        />

        <button
          type="submit"
          className="w-full mt-4 rounded-xl bg-green-500 py-3 font-semibold text-black
                     hover:bg-green-400 transition-all"
        >
          ▶ portfolio.contact.form.submit
        </button>
      </form>
    </div>
  );
}

function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full rounded-lg bg-white/5 border border-white/10
                 px-4 py-3 text-white placeholder-gray-500
                 focus:outline-none focus:border-green-400/60"
    />
  );
}



export default function ContactSection() {
  return (
    <section className="w-full max-w-6xl">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          &lt;Liên hệ /&gt;
        </h1>
        <p className="mt-4 text-gray-400 text-sm">
          portfolio.contact.description
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
