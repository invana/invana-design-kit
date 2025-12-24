import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { AppLayoutV2 } from "@invana/themes/app-v2/layout";
import { NavVerticalProps, Badge, Avatar, Input, Button } from "@invana/ui";
import { 
  Home, Folder, Search, Settings,
  Bell, HelpCircle, User, LogOut,
  FileCode, GitBranch, Bug, Package,
  Terminal, AlertCircle, Info,
  PanelRight, ChevronRight, File, FolderOpen
} from "lucide-react";

const meta: Meta<typeof AppLayoutV2> = {
  title: "Themes/app-v2",
  component: AppLayoutV2,
  parameters: {
    layout: 'fullscreen',
  }
};
export default meta;

type Story = StoryObj<typeof AppLayoutV2>;

// Activity Bar (Left Nav - icon only navigation)
const leftNav: NavVerticalProps = {
  className: "",
  topNavItems: [
    { label: "Explorer", icon: Folder, onClick: () => console.log('Explorer clicked'), tooltip: "Explorer" },
    { label: "Search", icon: Search, onClick: () => console.log('Search clicked'), tooltip: "Search" },
    { label: "Source Control", icon: GitBranch, onClick: () => console.log('Git clicked'), tooltip: "Source Control" },
    { label: "Debug", icon: Bug, onClick: () => console.log('Debug clicked'), tooltip: "Run and Debug" },
    { label: "Extensions", icon: Package, onClick: () => console.log('Extensions clicked'), tooltip: "Extensions" },
  ],
  bottomNavItems: [
    { label: "Settings", icon: Settings, onClick: () => console.log('Settings clicked'), tooltip: "Settings" },
    { label: "Account", icon: User, onClick: () => console.log('Account clicked'), tooltip: "Account" },
  ],
};

// File tree for left section (sidebar)
const FileTree = () => (
  <div className="h-full flex flex-col">
    <div className="p-2 text-xs font-semibold uppercase text-muted-foreground border-b">
      Explorer
    </div>
    <div className="flex-1 overflow-auto p-2">
      <div className="space-y-1">
        <div className="flex items-center gap-1 p-1 rounded hover:bg-accent cursor-pointer">
          <ChevronRight className="h-3 w-3" />
          <FolderOpen className="h-4 w-4 text-yellow-500" />
          <span className="text-sm">src</span>
        </div>
        <div className="pl-4 space-y-1">
          <div className="flex items-center gap-1 p-1 rounded hover:bg-accent cursor-pointer">
            <ChevronRight className="h-3 w-3" />
            <FolderOpen className="h-4 w-4 text-yellow-500" />
            <span className="text-sm">components</span>
          </div>
          <div className="pl-4 space-y-1">
            <div className="flex items-center gap-1 p-1 rounded bg-accent cursor-pointer">
              <FileCode className="h-4 w-4 text-blue-500" />
              <span className="text-sm">Button.tsx</span>
            </div>
            <div className="flex items-center gap-1 p-1 rounded hover:bg-accent cursor-pointer">
              <FileCode className="h-4 w-4 text-blue-500" />
              <span className="text-sm">Input.tsx</span>
            </div>
            <div className="flex items-center gap-1 p-1 rounded hover:bg-accent cursor-pointer">
              <FileCode className="h-4 w-4 text-blue-500" />
              <span className="text-sm">Card.tsx</span>
            </div>
          </div>
          <div className="flex items-center gap-1 p-1 rounded hover:bg-accent cursor-pointer">
            <FileCode className="h-4 w-4 text-blue-500" />
            <span className="text-sm">index.ts</span>
          </div>
        </div>
        <div className="flex items-center gap-1 p-1 rounded hover:bg-accent cursor-pointer">
          <File className="h-4 w-4 text-gray-500" />
          <span className="text-sm">package.json</span>
        </div>
        <div className="flex items-center gap-1 p-1 rounded hover:bg-accent cursor-pointer">
          <File className="h-4 w-4 text-gray-500" />
          <span className="text-sm">tsconfig.json</span>
        </div>
      </div>
    </div>
  </div>
);

// Editor content for main section
const EditorContent = () => (
  <div className="h-full flex flex-col bg-background">
    {/* Editor tabs */}
    <div className="flex border-b bg-card">
      <div className="flex items-center gap-2 px-4 py-2 border-r bg-background">
        <FileCode className="h-4 w-4 text-blue-500" />
        <span className="text-sm">Button.tsx</span>
        <button className="ml-2 h-4 w-4 rounded hover:bg-accent flex items-center justify-center">
          ×
        </button>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 border-r text-muted-foreground hover:bg-accent cursor-pointer">
        <FileCode className="h-4 w-4" />
        <span className="text-sm">Input.tsx</span>
      </div>
    </div>
    
    {/* Editor content */}
    <div className="flex-1 overflow-auto p-4 font-mono text-sm">
      <pre className="text-muted-foreground">
{`import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md',
          'text-sm font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';`}
      </pre>
    </div>
  </div>
);

// Terminal content for bottom section
const TerminalContent = () => (
  <div className="h-full flex flex-col bg-background">
    {/* Terminal tabs */}
    <div className="flex items-center border-b px-2 bg-card">
      <div className="flex items-center gap-2 px-3 py-1.5 text-sm border-b-2 border-primary">
        <Terminal className="h-3.5 w-3.5" />
        <span>Terminal</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
        <AlertCircle className="h-3.5 w-3.5" />
        <span>Problems</span>
        <Badge variant="destructive" className="h-4 px-1 text-xs">3</Badge>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
        <Info className="h-3.5 w-3.5" />
        <span>Output</span>
      </div>
    </div>
    
    {/* Terminal content */}
    <div className="flex-1 overflow-auto p-3 font-mono text-xs bg-black text-green-400">
      <div>$ npm run dev</div>
      <div className="text-muted-foreground mt-1">&gt; design-kit@1.0.0 dev</div>
      <div className="text-muted-foreground">&gt; vite</div>
      <div className="mt-2 text-blue-400">  VITE v5.0.0  ready in 234 ms</div>
      <div className="mt-1">  ➜  Local:   http://localhost:5173/</div>
      <div>  ➜  Network: http://192.168.1.100:5173/</div>
      <div className="mt-2 text-yellow-400">  press h + enter to show help</div>
      <div className="mt-2 animate-pulse">█</div>
    </div>
  </div>
);

// Right panel content (outline/chat)
const RightPanelContent = () => (
  <div className="h-full flex flex-col">
    <div className="p-2 text-xs font-semibold uppercase text-muted-foreground border-b flex items-center gap-2">
      <PanelRight className="h-3.5 w-3.5" />
      Outline
    </div>
    <div className="flex-1 overflow-auto p-2">
      <div className="space-y-1 text-sm">
        <div className="flex items-center gap-2 p-1.5 rounded hover:bg-accent cursor-pointer">
          <span className="text-purple-500">I</span>
          <span>ButtonProps</span>
        </div>
        <div className="pl-3 space-y-1">
          <div className="flex items-center gap-2 p-1 rounded hover:bg-accent cursor-pointer text-muted-foreground">
            <span className="text-blue-500">P</span>
            <span>variant</span>
          </div>
          <div className="flex items-center gap-2 p-1 rounded hover:bg-accent cursor-pointer text-muted-foreground">
            <span className="text-blue-500">P</span>
            <span>size</span>
          </div>
        </div>
        <div className="flex items-center gap-2 p-1.5 rounded bg-accent cursor-pointer">
          <span className="text-yellow-500">F</span>
          <span>Button</span>
        </div>
      </div>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    leftNav,
    header: {
      left: (
        <div className="flex items-center gap-3 px-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              VS
            </div>
            <span className="text-sm">File</span>
            <span className="text-sm">Edit</span>
            <span className="text-sm">View</span>
            <span className="text-sm">Go</span>
            <span className="text-sm">Run</span>
            <span className="text-sm">Terminal</span>
            <span className="text-sm">Help</span>
          </div>
        </div>
      ),
      center: (
        <div className="flex items-center gap-2 w-full max-w-md">
          <div className="relative w-full">
            <Input 
              placeholder="design-kit - Button.tsx" 
              className="h-7 text-center text-sm bg-muted/50"
            />
          </div>
        </div>
      ),
      right: (
        <div className="flex items-center gap-1 px-3">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Settings className="h-4 w-4" />
          </Button>
          <Avatar className="h-6 w-6">
            <img src="https://github.com/shadcn.png" alt="User" />
          </Avatar>
        </div>
      ),
    },
    leftSection: {
      content: <FileTree />,
      defaultSize: "250px",
      minSize: "150px",
      maxSize: "500px",
      collapsible: true,
    },
    mainSection: {
      content: <EditorContent />,
      defaultSize: "600px",
      minSize: "400px",
    },
    bottomSection: {
      content: <TerminalContent />,
      defaultSize: "300px",
      minSize: "100px",
      maxSize: "600px",
      collapsible: true,
    },
    rightSection: {
      content: <RightPanelContent />,
      defaultSize: "300px",
      minSize: "200px",
      maxSize: "600px",
      collapsible: true,
    },
    footer: {
      left: (
        <div className="flex items-center gap-4 px-2">
          <div className="flex items-center gap-1">
            <GitBranch className="h-3 w-3" />
            <span>main</span>
          </div>
          <div className="flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            <span>0</span>
            <span className="text-yellow-500">⚠ 3</span>
          </div>
        </div>
      ),
      right: (
        <div className="flex items-center gap-4 px-2 text-sm">
          <span>Ln 12, Col 45</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
          <span>TypeScript React</span>
          <span>Prettier</span>
        </div>
      ),
    },
    mainClassName: "bg-background",
  },
};
