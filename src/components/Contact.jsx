import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, MessageSquare, ArrowUpRight } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      lines: ['sami99khan99sami99@gmail.com', 'sami099khan099@gmail.com'],
      href: 'mailto:sami99khan99sami99@gmail.com',
    },
    {
      icon: <Phone size={18} />,
      label: 'Phone',
      lines: ['+91 879*****19', 'Available Mon–Fri, 9AM–6PM'],
      href: 'tel:+918790000019',
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      lines: ['Shahjahanpur, Uttar Pradesh', 'INDIA'],
      href: null,
    },
  ]

  const socials = [
    { icon: <Linkedin size={16} />, label: 'LinkedIn', href: '#' },
    { icon: <Github size={16} />, label: 'GitHub', href: '#' },
    { icon: <Twitter size={16} />, label: 'Twitter', href: '#' },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgb(203 213 225 / 0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse 60% 50% at 50% 0%, #000 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 60% 50% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <MessageSquare size={13} className="text-blue-600" />
            Get in Touch
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-[2.75rem]">
            Let's build something{' '}
            <span className="text-slate-400">together</span>
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
            Have a project in mind, or just want to say hi? I'm always open to
            new opportunities and conversations.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Form panel */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-1 text-lg font-semibold text-slate-900">
                Send me a message
              </h3>
              <p className="mb-6 text-sm text-slate-500">
                I typically reply within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/25 sm:w-auto"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Send Message</span>
                  <Send
                    size={16}
                    className="relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </form>
            </div>
          </div>

          {/* Info panel */}
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              {/* Contact info card */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7">
                <h3 className="mb-6 text-lg font-semibold text-slate-900">
                  Contact Information
                </h3>

                <ul className="space-y-5">
                  {contactInfo.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          {item.label}
                        </p>
                        {item.lines.map((line, j) => (
                          <p
                            key={j}
                            className={`truncate ${
                              j === 0
                                ? 'text-sm font-medium text-slate-800'
                                : 'text-xs text-slate-500'
                            }`}
                          >
                            {item.href && j === 0 ? (
                              <a
                                href={item.href}
                                className="transition-colors hover:text-blue-600"
                              >
                                {line}
                              </a>
                            ) : (
                              line
                            )}
                          </p>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials card */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-6 text-white sm:p-7">
                {/* Aurora */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-500/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />

                <div className="relative">
                  <h3 className="mb-1 text-lg font-semibold">
                    Connect with me
                  </h3>
                  <p className="mb-5 text-sm text-slate-400">
                    Follow along or reach out on socials.
                  </p>

                  <div className="space-y-2">
                    {socials.map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        target={s.href.startsWith('http') ? '_blank' : undefined}
                        rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-white">
                            {s.icon}
                          </span>
                          {s.label}
                        </span>
                        <ArrowUpRight
                          size={15}
                          className="text-slate-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                        />
                      </a>
                    ))}
                  </div>

                  {/* Availability badge */}
                  <div className="mt-5 flex items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2.5 text-xs font-medium text-emerald-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Available for freelance work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact