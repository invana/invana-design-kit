import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from '@invana/ui';

const meta = {
  title: 'ui-kit/components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Horizontal separator (default).
 */
export const Horizontal: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div>
        <h4 className="text-sm font-medium">Section 1</h4>
        <p className="text-sm text-muted-foreground">Content for the first section.</p>
      </div>
      <Separator />
      <div>
        <h4 className="text-sm font-medium">Section 2</h4>
        <p className="text-sm text-muted-foreground">Content for the second section.</p>
      </div>
    </div>
  ),
};

/**
 * Vertical separator.
 */
export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center gap-4">
      <div className="text-sm">Item 1</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Item 2</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Item 3</div>
    </div>
  ),
};

/**
 * Separator in a menu context.
 */
export const InMenu: Story = {
  render: () => (
    <div className="w-[200px] border rounded-md p-2">
      <div className="px-2 py-1.5 text-sm hover:bg-accent cursor-pointer rounded">Profile</div>
      <div className="px-2 py-1.5 text-sm hover:bg-accent cursor-pointer rounded">Settings</div>
      <Separator className="my-1" />
      <div className="px-2 py-1.5 text-sm hover:bg-accent cursor-pointer rounded">Help</div>
      <div className="px-2 py-1.5 text-sm hover:bg-accent cursor-pointer rounded">Logout</div>
    </div>
  ),
};
