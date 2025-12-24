import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '@invana/ui';

const meta = {
  title: 'ui-kit/typography/Typography',
  component: Typography.H1,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Typography components for consistent text styling across your application.',
      },
    },
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof Typography.H1>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Main page heading - largest and most prominent heading.
 */
export const H1: Story = {
  render: () => (
    <Typography.H1>
      Taxing Laughter: The Joke Tax Chronicles
    </Typography.H1>
  ),
};

/**
 * Section heading with bottom border.
 */
export const H2: Story = {
  render: () => (
    <Typography.H2>
      The People of the Kingdom
    </Typography.H2>
  ),
};

/**
 * Subsection heading.
 */
export const H3: Story = {
  render: () => (
    <Typography.H3>
      The Joke Tax
    </Typography.H3>
  ),
};

/**
 * Minor heading for smaller sections.
 */
export const H4: Story = {
  render: () => (
    <Typography.H4>
      People stopped telling jokes
    </Typography.H4>
  ),
};

/**
 * Smaller heading for sub-sections.
 */
export const H5: Story = {
  render: () => (
    <Typography.H5>
      The Jester's Plan
    </Typography.H5>
  ),
};

/**
 * Smallest heading for minor details.
 */
export const H6: Story = {
  render: () => (
    <Typography.H6>
      A New Beginning
    </Typography.H6>
  ),
};

/**
 * Standard paragraph text with proper spacing.
 */
export const Paragraph: Story = {
  render: () => (
    <Typography.P>
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </Typography.P>
  ),
};

/**
 * Blockquote for highlighting quotes or important text.
 */
export const Blockquote: Story = {
  render: () => (
    <Typography.Blockquote>
      "After all," he said, "everyone enjoys a good joke, so it's only fair that
      they should pay for the privilege."
    </Typography.Blockquote>
  ),
};

/**
 * Inline code for displaying code snippets within text.
 */
export const Code: Story = {
  render: () => (
    <Typography.Code>
      @radix-ui/react-alert-dialog
    </Typography.Code>
  ),
};

/**
 * Lead text - larger text for introductions or summaries.
 */
export const Lead: Story = {
  render: () => (
    <Typography.Lead>
      A modal dialog that interrupts the user with important content and expects
      a response.
    </Typography.Lead>
  ),
};

/**
 * Large text for emphasis.
 */
export const Large: Story = {
  render: () => (
    <Typography.Large>
      Are you absolutely sure?
    </Typography.Large>
  ),
};

/**
 * Small text for labels and captions.
 */
export const Small: Story = {
  render: () => (
    <Typography.Small>
      Email address
    </Typography.Small>
  ),
};

/**
 * Muted text for secondary information.
 */
export const Muted: Story = {
  render: () => (
    <Typography.Muted>
      Enter your email address.
    </Typography.Muted>
  ),
};

/**
 * Styled list with proper spacing.
 */
export const List: Story = {
  render: () => (
    <Typography.List>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners: 20 gold coins</li>
    </Typography.List>
  ),
};

/**
 * Pre-formatted text block for code or structured content.
 */
export const Pre: Story = {
  render: () => (
    <Typography.Pre>
      <code>{`function greet(name: string) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`}</code>
    </Typography.Pre>
  ),
};

/**
 * Complete example showing all typography components together.
 */
export const CompleteExample: Story = {
  render: () => (
    <div className="max-w-3xl space-y-4">
      <Typography.H1>
        Taxing Laughter: The Joke Tax Chronicles
      </Typography.H1>
      
      <Typography.Lead>
        Once upon a time, in a far-off land, there was a very lazy king who spent
        all day lounging on his throne. One day, his advisors came to him with a
        problem: the kingdom was running out of money.
      </Typography.Lead>
      
      <Typography.H2>
        The King's Plan
      </Typography.H2>
      
      <Typography.P>
        The king thought long and hard, and finally came up with a brilliant plan:
        he would tax the jokes in the kingdom.
      </Typography.P>
      
      <Typography.Blockquote>
        "After all," he said, "everyone enjoys a good joke, so it's only fair that
        they should pay for the privilege."
      </Typography.Blockquote>
      
      <Typography.H3>
        The Joke Tax
      </Typography.H3>
      
      <Typography.P>
        The king's subjects were not amused. They grumbled and complained, but the
        king was firm:
      </Typography.P>
      
      <Typography.List>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners: 20 gold coins</li>
      </Typography.List>
      
      <Typography.P>
        As a result, people stopped telling jokes, and the kingdom fell into a
        gloom. But there was one person who refused to let the king's foolishness
        get him down: a court jester named Jokester.
      </Typography.P>
      
      <Typography.Muted>
        The end of the tale approaches...
      </Typography.Muted>
    </div>
  ),
};

/**
 * Rich content example with multiple typography variants showcasing different use cases.
 */
export const RichContentShowcase: Story = {
  render: () => (
    <div className="max-w-4xl space-y-8">
      {/* Technical Documentation Section */}
      <section className="space-y-4">
        <Typography.H1>
          Getting Started with React Components
        </Typography.H1>
        
        <Typography.Lead>
          Build modern, accessible user interfaces with our comprehensive component library.
          This guide will walk you through installation, configuration, and best practices.
        </Typography.Lead>
        
        <Typography.H2>
          Installation
        </Typography.H2>
        
        <Typography.P>
          To get started, install the package using your preferred package manager:
        </Typography.P>
        
        <Typography.Code>
          npm install @invana/ui
        </Typography.Code>
        
        <Typography.Muted>
          Note: Node.js version 18.0.0 or higher is required.
        </Typography.Muted>
      </section>

      {/* Product Feature Section */}
      <section className="space-y-4">
        <Typography.H2>
          Key Features
        </Typography.H2>
        
        <Typography.Large>
          Everything you need to build modern applications
        </Typography.Large>
        
        <Typography.List>
          <li><strong>Fully Accessible</strong> - WCAG 2.1 compliant components</li>
          <li><strong>Customizable</strong> - Tailwind CSS powered theming system</li>
          <li><strong>TypeScript First</strong> - Complete type safety out of the box</li>
          <li><strong>Tree Shakeable</strong> - Import only what you need</li>
          <li><strong>Dark Mode</strong> - Built-in support for light and dark themes</li>
        </Typography.List>
        
        <Typography.H3>
          Performance Optimized
        </Typography.H3>
        
        <Typography.P>
          Our components are designed with performance in mind. Each component is optimized 
          for minimal bundle size and maximum runtime efficiency. With lazy loading support 
          and efficient re-rendering strategies, your applications will stay fast even as 
          they grow.
        </Typography.P>
        
        <Typography.Blockquote>
          "The best design system I've used. It's fast, flexible, and the developer 
          experience is outstanding. Migration took less than a day for our entire application."
          — Sarah Chen, Engineering Lead at TechCorp
        </Typography.Blockquote>
      </section>

      {/* Blog Article Section */}
      <section className="space-y-4">
        <Typography.H2>
          Design System Best Practices
        </Typography.H2>
        
        <Typography.Muted>
          Published on December 22, 2025 • 8 min read
        </Typography.Muted>
        
        <Typography.P>
          Building a scalable design system requires careful planning and consistent execution. 
          In this article, we'll explore key principles that have helped teams maintain 
          coherence across large applications.
        </Typography.P>
        
        <Typography.H3>
          1. Establish Clear Naming Conventions
        </Typography.H3>
        
        <Typography.P>
          Consistent naming makes your components predictable and easy to discover. Use 
          descriptive names that clearly communicate purpose, like <Typography.Code>SearchInput</Typography.Code> instead 
          of <Typography.Code>Input2</Typography.Code>.
        </Typography.P>
        
        <Typography.H4>
          Component Naming Strategy
        </Typography.H4>
        
        <Typography.List>
          <li>Use PascalCase for component names</li>
          <li>Prefix composed components (e.g., CardHeader, CardContent)</li>
          <li>Suffix variants with descriptive terms (e.g., ButtonPrimary, ButtonOutline)</li>
        </Typography.List>
        
        <Typography.H3>
          2. Document Everything
        </Typography.H3>
        
        <Typography.P>
          Good documentation is the foundation of a successful design system. Each component 
          should have clear usage examples, prop definitions, and accessibility guidelines.
        </Typography.P>
        
        <Typography.H4>
          Essential Documentation Elements
        </Typography.H4>
        
        <Typography.P>
          Every component page should include: interactive examples, code snippets, 
          accessibility notes, and common use cases. This helps developers understand 
          not just how to use a component, but when to use it.
        </Typography.P>
        
        <Typography.H5>
          Interactive Examples
        </Typography.H5>
        
        <Typography.Small>
          TIP: Live demos with editable code
        </Typography.Small>
        
        <Typography.P>
          Interactive examples allow developers to experiment with different props and 
          see results in real-time. Tools like Storybook make this process seamless.
        </Typography.P>
        
        <Typography.H5>
          Code Snippets
        </Typography.H5>
        
        <Typography.P>
          Provide ready-to-use code snippets that developers can copy and paste directly 
          into their projects. Include common patterns and edge cases.
        </Typography.P>
        
        <Typography.H6>
          Additional Resources
        </Typography.H6>
        
        <Typography.Muted>
          Check out our GitHub repository for more examples and community contributions.
        </Typography.Muted>
      </section>

      {/* Marketing/Landing Page Section */}
      <section className="space-y-4">
        <Typography.H1>
          Build Better Products, Faster
        </Typography.H1>
        
        <Typography.Large>
          Join thousands of developers who trust Invana UI for their next project
        </Typography.Large>
        
        <Typography.P>
          Whether you're building a startup MVP or an enterprise application, our 
          component library scales with your needs. Start shipping features today, 
          not fighting with UI inconsistencies.
        </Typography.P>
        
        <div className="grid grid-cols-3 gap-4 py-6">
          <div className="space-y-2">
            <Typography.H3>50K+</Typography.H3>
            <Typography.Small>Weekly Downloads</Typography.Small>
          </div>
          <div className="space-y-2">
            <Typography.H3>99.8%</Typography.H3>
            <Typography.Small>Uptime SLA</Typography.Small>
          </div>
          <div className="space-y-2">
            <Typography.H3>24/7</Typography.H3>
            <Typography.Small>Support Available</Typography.Small>
          </div>
        </div>
        
        <Typography.Blockquote>
          Start building today. No credit card required.
        </Typography.Blockquote>
      </section>

      {/* Error/Warning Messages Section */}
      <section className="space-y-4">
        <Typography.H2>
          System Messages
        </Typography.H2>
        
        <div className="space-y-3">
          <div className="border-l-4 border-destructive pl-4">
            <Typography.H4>Error: Connection Failed</Typography.H4>
            <Typography.P>
              Unable to connect to the server. Please check your internet connection and try again.
            </Typography.P>
            <Typography.Small>Error Code: NET_001</Typography.Small>
          </div>
          
          <div className="border-l-4 border-accent pl-4">
            <Typography.H4>Warning: Unsaved Changes</Typography.H4>
            <Typography.P>
              You have unsaved changes. Are you sure you want to leave this page?
            </Typography.P>
          </div>
          
          <div className="border-l-4 border-primary pl-4">
            <Typography.H4>Success: Profile Updated</Typography.H4>
            <Typography.P>
              Your profile has been successfully updated with the new information.
            </Typography.P>
          </div>
          
          <div className="border-l-4 border-ring pl-4">
            <Typography.H4>Info: New Features Available</Typography.H4>
            <Typography.P>
              We've released new features to improve your experience. Check out the changelog for details.
            </Typography.P>
          </div>
        </div>
      </section>

      {/* Mixed Content Section */}
      <section className="space-y-4">
        <Typography.H2>
          Typography Hierarchy Demonstration
        </Typography.H2>
        
        <Typography.P>
          This section demonstrates how different heading levels work together to create 
          a clear content hierarchy. Proper use of headings improves both readability 
          and accessibility.
        </Typography.P>
        
        <Typography.H3>
          Primary Section (H3)
        </Typography.H3>
        <Typography.Lead>
          Lead text introduces the section with slightly larger, more prominent text.
        </Typography.Lead>
        
        <Typography.H4>
          Subsection (H4)
        </Typography.H4>
        <Typography.P>
          Regular paragraph text provides detailed information. It should be easy to read 
          with appropriate line height and spacing.
        </Typography.P>
        
        <Typography.H5>
          Minor Section (H5)
        </Typography.H5>
        <Typography.Small>
          Small text for supplementary information or labels.
        </Typography.Small>
        
        <Typography.H6>
          Detail Section (H6)
        </Typography.H6>
        <Typography.Muted>
          Muted text for less important, secondary information that provides context.
        </Typography.Muted>
      </section>
    </div>
  ),
};

/**
 * Inline text styling utilities for emphasis and formatting within paragraphs.
 */
export const InlineStyles: Story = {
  render: () => (
    <div className="max-w-3xl space-y-6">
      <section className="space-y-3">
        <Typography.H3>Font Weight Variations</Typography.H3>
        <Typography.P>
          This paragraph contains <span className="font-light">light weight text</span>, {' '}
          <span className="font-normal">normal weight text</span>, {' '}
          <span className="font-medium">medium weight text</span>, {' '}
          <span className="font-semibold">semibold weight text</span>, and {' '}
          <span className="font-bold">bold weight text</span> for emphasis.
        </Typography.P>
      </section>

      <section className="space-y-3">
        <Typography.H3>Font Style Variations</Typography.H3>
        <Typography.P>
          You can use <em className="italic">italic text</em> for emphasis, {' '}
          <span className="not-italic font-medium">non-italic emphasized text</span>, or {' '}
          <strong className="font-bold">strong bold text</strong> for important content.
        </Typography.P>
      </section>

      <section className="space-y-3">
        <Typography.H3>Text Decoration</Typography.H3>
        <Typography.P>
          This paragraph shows <span className="underline">underlined text</span>, {' '}
          <span className="line-through">strikethrough text</span>, {' '}
          <span className="underline decoration-2">thick underline</span>, {' '}
          <span className="underline decoration-dotted">dotted underline</span>, and {' '}
          <span className="underline decoration-wavy">wavy underline</span>.
        </Typography.P>
      </section>

      <section className="space-y-3">
        <Typography.H3>Text Transform</Typography.H3>
        <Typography.P>
          Text can be <span className="uppercase">transformed to uppercase</span>, {' '}
          <span className="lowercase">TRANSFORMED TO LOWERCASE</span>, {' '}
          <span className="capitalize">capitalized for each word</span>, or {' '}
          <span className="normal-case">KEpt IN noRMAL CasE</span>.
        </Typography.P>
      </section>

      <section className="space-y-3">
        <Typography.H3>Text Color Utilities</Typography.H3>
        <Typography.P>
          Inline text can use <span className="text-primary">primary color</span>, {' '}
          <span className="text-secondary">secondary color</span>, {' '}
          <span className="text-muted-foreground">muted foreground</span>, {' '}
          <span className="text-destructive">destructive/error color</span>, or {' '}
          <span className="text-accent">accent color</span> for semantic meaning.
        </Typography.P>
      </section>

      <section className="space-y-3">
        <Typography.H3>Background Highlights</Typography.H3>
        <Typography.P>
          You can highlight text with <span className="bg-primary/20 px-1 rounded">primary background</span>, {' '}
          <span className="bg-secondary px-1 rounded">secondary background</span>, {' '}
          <span className="bg-muted px-1 rounded">muted background</span>, or {' '}
          <span className="bg-accent/20 px-1 rounded">accent background</span> for emphasis.
        </Typography.P>
      </section>

      <section className="space-y-3">
        <Typography.H3>Font Size Inline</Typography.H3>
        <Typography.P>
          Mix sizes within text: <span className="text-xs">extra small</span>, {' '}
          <span className="text-sm">small</span>, {' '}
          <span className="text-base">base</span>, {' '}
          <span className="text-lg">large</span>, and {' '}
          <span className="text-xl">extra large</span> text.
        </Typography.P>
      </section>

      <section className="space-y-3">
        <Typography.H3>Letter Spacing</Typography.H3>
        <Typography.P>
          Adjust spacing with <span className="tracking-tighter">tighter tracking</span>, {' '}
          <span className="tracking-tight">tight tracking</span>, {' '}
          <span className="tracking-normal">normal tracking</span>, {' '}
          <span className="tracking-wide">wide tracking</span>, or {' '}
          <span className="tracking-wider">wider tracking</span>.
        </Typography.P>
      </section>

      <section className="space-y-3">
        <Typography.H3>Combined Styles</Typography.H3>
        <Typography.P>
          Combine multiple styles: <span className="font-bold text-primary underline">bold primary underlined</span>, {' '}
          <span className="italic text-muted-foreground">italic muted</span>, {' '}
          <span className="font-semibold bg-accent/20 px-1 rounded">semibold highlighted</span>, or {' '}
          <span className="uppercase font-bold tracking-wide text-destructive">uppercase bold destructive</span>.
        </Typography.P>
      </section>

      <section className="space-y-3">
        <Typography.H3>Hover States</Typography.H3>
        <Typography.P>
          Interactive text with <span className="text-primary hover:text-primary/80 cursor-pointer underline">hover fade</span>, {' '}
          <span className="hover:bg-muted px-1 rounded transition-colors cursor-pointer">hover background</span>, or {' '}
          <span className="hover:underline cursor-pointer text-foreground">hover underline</span>.
        </Typography.P>
      </section>
    </div>
  ),
};
