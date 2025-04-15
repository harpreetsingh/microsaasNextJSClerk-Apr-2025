import { Zap, Shield, Smartphone, Globe, BarChart, RefreshCw } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with next-generation technology that ensures your application runs smoothly.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Enterprise-Grade Security",
      description: "Built-in protection against common vulnerabilities with regular security updates and audits.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Responsive by Design",
      description: "Perfectly adapted to any device or screen size for a consistent user experience everywhere.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global CDN",
      description: "Content delivered from the edge location nearest to your users for minimal latency.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Advanced Analytics",
      description: "Comprehensive insights into user behavior and application performance to guide your decisions.",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-primary" />,
      title: "Continuous Updates",
      description: "Regular feature enhancements and improvements delivered seamlessly without disruption.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything you need to build modern applications
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our platform provides all the tools and features you need to create exceptional digital experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-3 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
