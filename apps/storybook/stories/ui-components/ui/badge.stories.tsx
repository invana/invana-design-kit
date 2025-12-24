import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '@invana/ui';

const meta = {
  title: 'ui-kit/components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default badge with primary styling.
 */
export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

/**
 * Secondary badge with muted styling.
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

/**
 * Destructive badge for errors or warnings.
 */
export const Destructive: Story = {
  args: {
    children: 'Error',
    variant: 'destructive',
  },
};

/**
 * Outline badge with border only.
 */
export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

/**
 * Example showing multiple badges together.
 */
export const MultipleBadges: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="default">New</Badge>
      <Badge variant="secondary">In Progress</Badge>
      <Badge variant="destructive">Critical</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  ),
};

/**
 * Comprehensive showcase of all badge variants.
 * This story displays all possible badge combinations with different use cases.
 */
export const CompleteShowcase: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">All Variants</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Status Badges</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="default">Active</Badge>
          <Badge variant="secondary">Pending</Badge>
          <Badge variant="destructive">Failed</Badge>
          <Badge variant="outline">Draft</Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Priority Badges</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="destructive">High</Badge>
          <Badge variant="default">Medium</Badge>
          <Badge variant="secondary">Low</Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Category Tags</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline">Design</Badge>
          <Badge variant="outline">Development</Badge>
          <Badge variant="outline">Marketing</Badge>
          <Badge variant="outline">Sales</Badge>
          <Badge variant="outline">Support</Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">With Counts</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="default">New 3</Badge>
          <Badge variant="secondary">Updates 12</Badge>
          <Badge variant="destructive">Errors 5</Badge>
          <Badge variant="outline">Comments 24</Badge>
        </div>
      </div>
    </div>
  ),
};
