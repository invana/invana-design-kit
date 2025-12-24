import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@invana/ui';

const meta = {
  title: 'ui-kit/components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===== BASIC ACCORDION EXAMPLES =====

/**
 * Basic single accordion.
 * Only one item can be open at a time (default behavior).
 */
export const Basic: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is this component?</AccordionTrigger>
        <AccordionContent>
          This is an accordion component built with Radix UI. It allows you to show and hide content in collapsible sections.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I use it?</AccordionTrigger>
        <AccordionContent>
          Simply import the Accordion, AccordionItem, AccordionTrigger, and AccordionContent components and compose them together.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes! It's built with Radix UI primitives, which follow WAI-ARIA design patterns for accessibility.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/**
 * Multiple items open at once.
 * Set type="multiple" to allow multiple accordion items to be open simultaneously.
 */
export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can multiple items be open?</AccordionTrigger>
        <AccordionContent>
          Yes! When you set type="multiple", users can expand multiple accordion items at the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Try opening this one too</AccordionTrigger>
        <AccordionContent>
          Notice how both items can remain open. This is useful for comparing content or when users need to reference multiple sections.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>And this one as well</AccordionTrigger>
        <AccordionContent>
          All three items can be open at the same time with type="multiple".
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/**
 * Default expanded item.
 * Set defaultValue to have an item open by default.
 */
export const DefaultExpanded: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-2" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>First Item</AccordionTrigger>
        <AccordionContent>
          This item is collapsed by default.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Item (Default Open)</AccordionTrigger>
        <AccordionContent>
          This item is open by default because defaultValue="item-2" is set on the Accordion.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third Item</AccordionTrigger>
        <AccordionContent>
          This item is also collapsed by default.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// ===== REAL-WORLD USE CASES =====

/**
 * FAQ Section.
 * Common use case for displaying frequently asked questions.
 */
export const FAQ: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[600px]">
      <AccordionItem value="shipping">
        <AccordionTrigger>What are the shipping options?</AccordionTrigger>
        <AccordionContent>
          <p className="mb-2">We offer several shipping options:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Standard Shipping (5-7 business days) - Free</li>
            <li>Express Shipping (2-3 business days) - $9.99</li>
            <li>Overnight Shipping (1 business day) - $24.99</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          We accept returns within 30 days of purchase. Items must be unused and in original packaging. 
          Refunds are processed within 5-7 business days after we receive your return. 
          Original shipping costs are non-refundable.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="payment">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>
          We accept all major credit cards (Visa, MasterCard, American Express, Discover), 
          PayPal, Apple Pay, Google Pay, and Shop Pay. We also offer buy now, pay later options through Affirm and Klarna.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="warranty">
        <AccordionTrigger>Do you offer warranties?</AccordionTrigger>
        <AccordionContent>
          Yes! All products come with a 1-year manufacturer's warranty covering defects in materials and workmanship. 
          Extended warranty options are available at checkout for up to 3 additional years.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/**
 * Product Specifications.
 * Use for displaying detailed product information.
 */
export const ProductSpecs: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[600px]">
      <AccordionItem value="features">
        <AccordionTrigger>Features & Benefits</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>High-performance processor for lightning-fast operations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Long-lasting battery with up to 20 hours of use</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Sleek, lightweight design for portability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Advanced security features including fingerprint reader</span>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="specs">
        <AccordionTrigger>Technical Specifications</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="font-medium">Processor:</div>
            <div>Intel Core i7-12700H</div>
            <div className="font-medium">RAM:</div>
            <div>16GB DDR5</div>
            <div className="font-medium">Storage:</div>
            <div>512GB NVMe SSD</div>
            <div className="font-medium">Display:</div>
            <div>15.6" FHD (1920x1080)</div>
            <div className="font-medium">Graphics:</div>
            <div>NVIDIA RTX 3060</div>
            <div className="font-medium">Weight:</div>
            <div>4.2 lbs (1.9 kg)</div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="compatibility">
        <AccordionTrigger>Compatibility & Requirements</AccordionTrigger>
        <AccordionContent>
          <p className="mb-2"><strong>Operating Systems:</strong></p>
          <ul className="list-disc pl-5 mb-3">
            <li>Windows 11 Pro</li>
            <li>Compatible with Windows 10</li>
            <li>Linux support available</li>
          </ul>
          <p className="mb-2"><strong>Connectivity:</strong></p>
          <ul className="list-disc pl-5">
            <li>Wi-Fi 6E (802.11ax)</li>
            <li>Bluetooth 5.2</li>
            <li>3x USB-C, 2x USB-A, HDMI 2.1</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="package">
        <AccordionTrigger>What's in the Box</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-1">
            <li>• Laptop computer</li>
            <li>• Power adapter and cable</li>
            <li>• Quick start guide</li>
            <li>• Warranty card</li>
            <li>• Cleaning cloth</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/**
 * Settings Panel.
 * Use for organizing application settings and preferences.
 */
export const SettingsPanel: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[500px]">
      <AccordionItem value="account">
        <AccordionTrigger>Account Settings</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">Email Address</label>
              <input type="email" className="w-full mt-1 px-3 py-2 border rounded-md" defaultValue="user@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Username</label>
              <input type="text" className="w-full mt-1 px-3 py-2 border rounded-md" defaultValue="johndoe" />
            </div>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm">Save Changes</button>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="notifications">
        <AccordionTrigger>Notification Preferences</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm">Email notifications</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm">Push notifications</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm">SMS notifications</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm">Weekly digest</span>
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="privacy">
        <AccordionTrigger>Privacy & Security</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm">Make profile public</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm">Two-factor authentication</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm">Share activity status</span>
            </label>
            <button className="text-sm text-destructive hover:underline">Delete Account</button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/**
 * Documentation/Help Section.
 * Use for organizing documentation or help content.
 */
export const Documentation: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[700px]">
      <AccordionItem value="getting-started">
        <AccordionTrigger>Getting Started</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p>Welcome! Here's how to get started with our platform:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Create your account and verify your email</li>
              <li>Complete your profile with relevant information</li>
              <li>Explore the dashboard and familiarize yourself with the interface</li>
              <li>Check out the tutorials section for detailed guides</li>
              <li>Join our community forum to connect with other users</li>
            </ol>
            <div className="mt-4 p-3 bg-muted rounded-md">
              <p className="text-sm"><strong>Pro Tip:</strong> Start with our interactive tutorial to learn the basics in just 5 minutes!</p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="api">
        <AccordionTrigger>API Documentation</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p>Our REST API allows you to integrate our services into your applications.</p>
            <div className="mt-3 p-3 bg-muted rounded-md font-mono text-sm">
              <p className="mb-2"><strong>Base URL:</strong></p>
              <code>https://api.example.com/v1</code>
            </div>
            <div className="mt-3 p-3 bg-muted rounded-md font-mono text-sm">
              <p className="mb-2"><strong>Authentication:</strong></p>
              <code>Authorization: Bearer YOUR_API_KEY</code>
            </div>
            <p className="text-sm text-muted-foreground">
              Visit our <a href="#" className="text-primary hover:underline">full API documentation</a> for detailed endpoint information.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="troubleshooting">
        <AccordionTrigger>Troubleshooting</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div>
              <p className="font-medium mb-1">Can't log in?</p>
              <p className="text-sm text-muted-foreground">Try resetting your password or clearing your browser cache.</p>
            </div>
            <div>
              <p className="font-medium mb-1">Features not loading?</p>
              <p className="text-sm text-muted-foreground">Check your internet connection and try refreshing the page.</p>
            </div>
            <div>
              <p className="font-medium mb-1">Need more help?</p>
              <p className="text-sm text-muted-foreground">Contact our support team at support@example.com or use the chat widget.</p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/**
 * Styled accordion with custom appearance.
 * Demonstrates customization possibilities.
 */
export const CustomStyled: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[500px]">
      <AccordionItem value="item-1" className="border border-border rounded-lg mb-2 px-4">
        <AccordionTrigger className="hover:no-underline">
          <span className="flex items-center gap-2">
            <span className="text-xl">🎨</span>
            <span>Custom Styled Item</span>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          This accordion item has custom styling with rounded borders and padding.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border border-border rounded-lg mb-2 px-4 bg-primary/5">
        <AccordionTrigger className="hover:no-underline">
          <span className="flex items-center gap-2">
            <span className="text-xl">✨</span>
            <span>With Background Color</span>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          This item has a subtle background color to make it stand out.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border border-primary rounded-lg px-4">
        <AccordionTrigger className="hover:no-underline text-primary">
          <span className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span>Highlighted Item</span>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          This item uses primary color styling to draw attention.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
