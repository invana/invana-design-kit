import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, CardDescription, CardFooter, 
  CardHeader, CardTitle, CardWithHeader, Button } from '@invana/ui';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ui-kit/components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===== BASIC CARD EXAMPLES =====

/**
 * Basic card with header and content.
 * Use this as the foundation for any card-based UI.
 */
export const Basic: Story = {
  args: {
    className: 'w-[350px]',
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the main content area of the card.</p>
        </CardContent>
      </>
    ),
  },
};

/**
 * Card with header, content, and footer.
 * Use this when you need action buttons or additional info at the bottom.
 */
export const WithFooter: Story = {
  args: {
    className: 'w-[350px]',
    children: (
      <>
        <CardHeader>
          <CardTitle>Complete Card</CardTitle>
          <CardDescription>With all card sections</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card demonstrates the header, content, and footer sections.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </CardFooter>
      </>
    ),
  },
};

// ===== REAL-WORLD USE CASES =====

/**
 * User profile card.
 * Use this for displaying user information in dashboards or directories.
 */
export const UserProfile: Story = {
  args: {
    className: 'w-[350px]',
    children: (
      <>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">
              👤
            </div>
            <div>
              <CardTitle>Sarah Johnson</CardTitle>
              <CardDescription>Product Designer</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 ">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email:</span>
              <span>sarah.j@company.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Location:</span>
              <span>San Francisco, CA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Joined:</span>
              <span>Jan 2023</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">View Profile</Button>
        </CardFooter>
      </>
    ),
  },
};

/**
 * Product card for e-commerce.
 * Use this in product catalogs, shopping carts, or marketplace listings.
 */
export const ProductCard: Story = {
  args: {
    className: 'w-[300px]',
    children: (
      <>
        <div className="aspect-square bg-muted/20 flex items-center justify-center text-6xl">
          📱
        </div>
        <CardHeader>
          <CardTitle>Wireless Headphones</CardTitle>
          <CardDescription>Premium noise-cancelling</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">$299</span>
            <span className=" text-muted-foreground line-through">$399</span>
            <span className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded">25% OFF</span>
          </div>
          <div className="mt-3 flex gap-1">
            <span>⭐⭐⭐⭐⭐</span>
            <span className=" text-muted-foreground">(128 reviews)</span>
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button variant="outline" className="flex-1">Add to Cart</Button>
          <Button className="flex-1">Buy Now</Button>
        </CardFooter>
      </>
    ),
  },
};

/**
 * Statistics/metrics card.
 * Use this in dashboards to display KPIs and important metrics.
 */
export const MetricsCard: Story = {
  args: {
    className: 'w-[280px]',
    children: (
      <>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className=" font-medium">Total Revenue</CardTitle>
          <span className="text-2xl">💰</span>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground mt-1">
            <span className="text-green-600">↑ 20.1%</span> from last month
          </p>
          <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-[75%] bg-primary"></div>
          </div>
        </CardContent>
      </>
    ),
  },
};

/**
 * Notification card.
 * Use this for alerts, messages, or activity feeds.
 */
export const NotificationCard: Story = {
  args: {
    className: 'w-[400px]',
    children: (
      <>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                🔔
              </div>
              <div>
                <CardTitle>New comment on your post</CardTitle>
                <CardDescription>2 minutes ago</CardDescription>
              </div>
            </div>
            <Button variant="ghost" size="sm">✕</Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="">
            <span className="font-semibold">John Doe</span> commented: "Great work on this feature!
            Looking forward to seeing it in production."
          </p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button variant="outline" size="sm">Mark as Read</Button>
          <Button size="sm">Reply</Button>
        </CardFooter>
      </>
    ),
  },
};

/**
 * Feature card for landing pages.
 * Use this to showcase product features, benefits, or services.
 */
export const FeatureCard: Story = {
  args: {
    className: 'w-[320px]',
    children: (
      <>
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-3">
            ⚡
          </div>
          <CardTitle>Lightning Fast</CardTitle>
          <CardDescription>Optimized for performance</CardDescription>
        </CardHeader>
        <CardContent>
          <p className=" text-muted-foreground">
            Experience blazing fast load times and smooth interactions.
            Our platform is built for speed from the ground up.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="px-0">Learn more →</Button>
        </CardFooter>
      </>
    ),
  },
};

/**
 * Settings card for configuration panels.
 * Use this in settings pages or preference menus.
 */
export const SettingsCard: Story = {
  args: {
    className: 'w-[400px]',
    children: (
      <>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>Manage how you receive email notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium ">Marketing emails</div>
              <div className="text-xs text-muted-foreground">Receive emails about new features</div>
            </div>
            <input type="checkbox" className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium ">Security alerts</div>
              <div className="text-xs text-muted-foreground">Get notified about account activity</div>
            </div>
            <input type="checkbox" defaultChecked className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium ">Weekly digest</div>
              <div className="text-xs text-muted-foreground">Summary of your weekly activity</div>
            </div>
            <input type="checkbox" className="w-4 h-4" />
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button variant="outline" className="flex-1">Cancel</Button>
          <Button className="flex-1">Save Changes</Button>
        </CardFooter>
      </>
    ),
  },
};

/**
 * Pricing card for subscription plans.
 * Use this in pricing pages or upgrade prompts.
 */
export const PricingCard: Story = {
  args: {
    className: 'w-[300px]',
    children: (
      <>
        <CardHeader>
          <div className="text-center">
            <CardTitle className="text-xl">Professional</CardTitle>
            <CardDescription className="mt-2">For growing teams</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 ">
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              Unlimited projects
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              Advanced analytics
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              Priority support
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              Custom integrations
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <span>✗</span>
              White-label options
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </>
    ),
  },
};

/**
 * Interactive hover card.
 * Use this for cards that need hover effects or clickable areas.
 */
export const InteractiveCard: Story = {
  args: {
    className: 'w-[350px] cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1',
    children: (
      <>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>Hover to see the effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p className=" text-muted-foreground">
            This card responds to hover with a subtle lift animation and enhanced shadow.
            Perfect for clickable cards in grids or lists.
          </p>
        </CardContent>
      </>
    ),
  },
};

// ===== LAYOUT EXAMPLES =====

/**
 * Multiple cards in a grid layout.
 * Common pattern for dashboards and data displays.
 */
export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Active Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">2,543</div>
          <p className="text-xs text-green-600">↑ 12% vs last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$12.4K</div>
          <p className="text-xs text-green-600">↑ 8% vs last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Conversion</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">3.24%</div>
          <p className="text-xs text-red-600">↓ 2% vs last week</p>
        </CardContent>
      </Card>
    </div>
  ),
};

/**
 * Comprehensive showcase of all card patterns and layouts.
 * Demonstrates various card structures, use cases, and compositions.
 */
export const CompleteShowcase: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold mb-6">Card Component Showcase</h2>
      </div>

      {/* Basic Structures */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Structures</h3>
        <div className="grid grid-cols-3 gap-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Header Only</CardTitle>
            </CardHeader>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Header + Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="">Content area with text.</p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Complete Card</CardTitle>
              <CardDescription>With all sections</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="">Content goes here.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Metrics Cards */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Metrics & Statistics</h3>
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className=" font-medium">Total Users</CardTitle>
              <span className="text-xl">👥</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,543</div>
              <p className="text-xs text-green-600 mt-1">↑ 12.5%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className=" font-medium">Revenue</CardTitle>
              <span className="text-xl">💰</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45.2K</div>
              <p className="text-xs text-green-600 mt-1">↑ 8.3%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className=" font-medium">Conversion</CardTitle>
              <span className="text-xl">📈</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.24%</div>
              <p className="text-xs text-red-600 mt-1">↓ 2.1%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className=" font-medium">Active Now</CardTitle>
              <span className="text-xl">🟢</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">573</div>
              <p className="text-xs text-muted-foreground mt-1">users online</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Feature Cards */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Feature Cards</h3>
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-2">⚡</div>
              <CardTitle>Fast Performance</CardTitle>
              <CardDescription>Lightning-fast load times</CardDescription>
            </CardHeader>
            <CardContent>
              <p className=" text-muted-foreground">
                Optimized for speed and efficiency in all operations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-2">🔒</div>
              <CardTitle>Secure by Default</CardTitle>
              <CardDescription>Enterprise-grade security</CardDescription>
            </CardHeader>
            <CardContent>
              <p className=" text-muted-foreground">
                Built with security best practices from the ground up.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-2">🎨</div>
              <CardTitle>Customizable</CardTitle>
              <CardDescription>Fully themeable</CardDescription>
            </CardHeader>
            <CardContent>
              <p className=" text-muted-foreground">
                Customize colors, spacing, and layouts to match your brand.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* User Cards */}
      <div>
        <h3 className="text-lg font-semibold mb-4">User Profile Cards</h3>
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">👤</div>
                <div>
                  <CardTitle>Sarah Johnson</CardTitle>
                  <CardDescription>Product Designer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 ">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span>sarah.j@company.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="sm">View Profile</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">👤</div>
                <div>
                  <CardTitle>Michael Chen</CardTitle>
                  <CardDescription>Software Engineer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 ">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span>m.chen@company.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span>New York, NY</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="sm">View Profile</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  ),
};

// ===== COLORED HEADER CARDS (BOOTSTRAP-STYLE) =====

/**
 * Card with primary colored header using CardWithHeader component.
 * Bootstrap-style card with colored header and white content area.
 */
export const PrimaryHeader: Story = {
  render: () => (
    <CardWithHeader
      className="w-[350px]"
      title="Primary Header Card"
      description={<span className="text-primary-foreground/80">Card with primary colored header</span>}
      headerClassName="bg-primary text-primary-foreground"
      contentClassName=""
      footer={<Button variant="outline" className="w-full">Action</Button>}
    >
      <p>This card has a primary colored header, similar to Bootstrap's card-header styles.</p>
    </CardWithHeader>
  ),
};

/**
 * Card with success colored header.
 * Use this for positive actions or successful states.
 */
export const SuccessHeader: Story = {
  render: () => (
    <CardWithHeader
      className="w-[350px]"
      title="Success State"
      description={<span className="text-white/80">Operation completed successfully</span>}
      headerClassName="bg-green-600 text-white"
      contentClassName=""
    >
      <div className="space-y-2">
        <div className="flex items-center gap-2 ">
          <span className="text-2xl">✓</span>
          <span>All items processed</span>
        </div>
        <div className="flex items-center gap-2 ">
          <span className="text-2xl">✓</span>
          <span>Data synchronized</span>
        </div>
        <div className="flex items-center gap-2 ">
          <span className="text-2xl">✓</span>
          <span>Notifications sent</span>
        </div>
      </div>
    </CardWithHeader>
  ),
};

/**
 * Card with destructive/danger colored header.
 * Use this for warnings, errors, or critical information.
 */
export const DangerHeader: Story = {
  render: () => (
    <CardWithHeader
      className="w-[350px]"
      title="Critical Alert"
      description={<span className="text-destructive-foreground/80">Immediate action required</span>}
      headerClassName="bg-destructive text-destructive-foreground"
      contentClassName=""
      footer={
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1">Dismiss</Button>
          <Button variant="destructive" className="flex-1">Upgrade Now</Button>
        </div>
      }
    >
      <p className="">Your account has exceeded the storage limit. Please upgrade your plan or remove some files.</p>
    </CardWithHeader>
  ),
};

/**
 * Card with muted/secondary colored header.
 * Use this for less prominent information or secondary content.
 */
export const MutedHeader: Story = {
  render: () => (
    <CardWithHeader
      className="w-[350px]"
      title="Settings"
      description="Manage your preferences"
      headerClassName="bg-muted text-foreground"
      contentClassName=""
      footer={<Button className="w-full">Save Changes</Button>}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="">Notifications</span>
          <input type="checkbox" defaultChecked className="h-4 w-4" />
        </div>
        <div className="flex items-center justify-between">
          <span className="">Auto-save</span>
          <input type="checkbox" defaultChecked className="h-4 w-4" />
        </div>
        <div className="flex items-center justify-between">
          <span className="">Dark mode</span>
          <input type="checkbox" className="h-4 w-4" />
        </div>
      </div>
    </CardWithHeader>
  ),
};

/**
 * Card with accent colored header.
 * Use this to highlight special features or premium content.
 */
export const AccentHeader: Story = {
  render: () => (
    <CardWithHeader
      className="w-[350px]"
      title="Premium Feature"
      description={<span className="text-accent-foreground/80">Unlock advanced capabilities</span>}
      headerClassName="bg-accent text-accent-foreground"
      contentClassName=""
      footer={<Button className="w-full">Upgrade to Premium</Button>}
    >
      <ul className="space-y-2 ">
        <li className="flex items-center gap-2">
          <span>✨</span> Advanced analytics
        </li>
        <li className="flex items-center gap-2">
          <span>✨</span> Priority support
        </li>
        <li className="flex items-center gap-2">
          <span>✨</span> Custom integrations
        </li>
      </ul>
    </CardWithHeader>
  ),
};

/**
 * Card with gradient colored header.
 * Modern card with gradient header for eye-catching designs.
 */
export const GradientHeader: Story = {
  render: () => (
    <CardWithHeader
      className="w-[350px]"
      title="Gradient Header"
      description={<span className="text-white/90">Modern gradient design</span>}
      headerClassName="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
      contentClassName=""
      footer={<Button className="w-full">Explore</Button>}
    >
      <p className="">This card features a beautiful gradient header that draws attention and adds visual interest.</p>
      <div className="mt-4 flex gap-2">
        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Feature</span>
        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">New</span>
      </div>
    </CardWithHeader>
  ),
};

/**
 * Multiple cards with different colored headers using CardWithHeader.
 * Demonstrates how colored headers can be used together in a layout.
 */
export const ColoredHeaderVariants: Story = {
  render: () => (
    <div className="w-full max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardWithHeader
          title="Info"
          description={<span className="text-white/80">General information</span>}
          headerClassName="bg-blue-600 text-white"
          contentClassName=""
        >
          <p className="">Blue header for informational content.</p>
        </CardWithHeader>
        
        <CardWithHeader
          title="Success"
          description={<span className="text-white/80">Completed tasks</span>}
          headerClassName="bg-green-600 text-white"
          contentClassName=""
        >
          <p className="">Green header for success states.</p>
        </CardWithHeader>
        
        <CardWithHeader
          title="Warning"
          description={<span className="text-black/70">Needs attention</span>}
          headerClassName="bg-yellow-500 text-black"
          contentClassName=""
        >
          <p className="">Yellow header for warnings.</p>
        </CardWithHeader>
        
        <CardWithHeader
          title="Error"
          description={<span className="text-white/80">Critical issue</span>}
          headerClassName="bg-red-600 text-white"
          contentClassName=""
        >
          <p className="">Red header for errors and alerts.</p>
        </CardWithHeader>
        
        <CardWithHeader
          title="Premium"
          description={<span className="text-white/80">Exclusive content</span>}
          headerClassName="bg-purple-600 text-white"
          contentClassName=""
        >
          <p className="">Purple header for premium features.</p>
        </CardWithHeader>
        
        <CardWithHeader
          title="Dark"
          description={<span className="text-white/80">Dark themed card</span>}
          headerClassName="bg-gray-800 text-white"
          contentClassName=""
        >
          <p className="">Dark header for contrast.</p>
        </CardWithHeader>
      </div>
    </div>
  ),
};

