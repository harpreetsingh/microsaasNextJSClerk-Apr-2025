import { Check } from "lucide-react"

export default function PricingSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that&apos;s right for you and get started with your project today.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          {/* Basic Plan */}
          <div className="flex flex-col h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-bold">Basic</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Essential features for individuals and small teams
              </p>
              <div className="mt-4">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
            </div>
            <div className="flex-1 p-6 pt-0">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>5 projects</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>Up to 10 users</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>24-hour support response time</span>
                </li>
              </ul>
            </div>
            <div className="p-6 pt-0">
              <button className="w-full inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="flex flex-col h-full overflow-hidden rounded-lg border-2 border-gray-900 bg-white shadow-lg dark:border-gray-100 dark:bg-gray-950">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="px-3 py-1 text-xs font-medium text-center text-white bg-gray-900 rounded-full w-fit mx-auto mb-2 dark:bg-gray-100 dark:text-gray-900">
                Popular
              </div>
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Advanced features for growing businesses</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
            </div>
            <div className="flex-1 p-6 pt-0">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>Up to 50 users</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>4-hour support response time</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>Custom integrations</span>
                </li>
              </ul>
            </div>
            <div className="p-6 pt-0">
              <button className="w-full inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Custom solutions for large organizations</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
            </div>
            <div className="flex-1 p-6 pt-0">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>Unlimited everything</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>Unlimited users</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>Premium analytics with custom reports</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>1-hour support response time</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  <span>Custom development</span>
                </li>
              </ul>
            </div>
            <div className="p-6 pt-0">
              <button className="w-full inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400">
            Need a custom plan?{" "}
            <a
              href="#"
              className="font-medium text-gray-900 underline underline-offset-4 hover:text-gray-900/80 dark:text-gray-50 dark:hover:text-gray-50/80"
            >
              Contact us
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
    </section>
  )
}
