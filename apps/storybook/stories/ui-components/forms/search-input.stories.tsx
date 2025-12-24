import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { SearchInput } from '@invana/ui';

const meta: Meta<typeof SearchInput> = {
  title: 'ui-kit/form-inputs/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default search input with placeholder text.
 * Basic usage for simple search functionality.
 */
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="w-[400px]">
        <SearchInput value={value} onChange={setValue} />
        <p className="text-sm text-muted-foreground mt-2">Search value: {value || '(empty)'}</p>
      </div>
    );
  }
};

/**
 * Search input with initial value.
 * Use this when you want to pre-populate the search field.
 */
export const WithInitialValue: Story = {
  render: () => {
    const [value, setValue] = useState('Initial search text');
    return (
      <div className="w-[400px]">
        <SearchInput value={value} onChange={setValue} />
        <p className="text-sm text-muted-foreground mt-2">Current value: {value}</p>
      </div>
    );
  }
};

/**
 * Compact search input for toolbars.
 * Smaller size for use in headers or sidebars.
 */
export const Compact: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="w-[250px]">
        <SearchInput
          value={value}
          onChange={setValue}
          className="h-8 text-sm"
        />
      </div>
    );
  }
};

/**
 * Full-width search input.
 * Expands to fill container width, useful for main search areas.
 */
export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="w-[600px]">
        <SearchInput value={value} onChange={setValue} />
      </div>
    );
  }
};

/**
 * Search with real-time filtering example.
 * Demonstrates filtering a list based on search input.
 */
export const WithFiltering: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const items = [
      'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
      'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'
    ];

    const filteredItems = items.filter(item =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <div className="w-[400px]">
        <SearchInput value={searchValue} onChange={setSearchValue} />
        <div className="mt-4 space-y-1">
          <p className="text-sm font-medium">Results ({filteredItems.length}):</p>
          <div className="border rounded-md p-2 max-h-[200px] overflow-auto">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, idx) => (
                <div key={idx} className="text-sm py-1 px-2 hover:bg-muted rounded">
                  {item}
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No results found</p>
            )}
          </div>
        </div>
      </div>
    );
  }
};

/**
 * Search with clear button functionality.
 * Shows how to add a clear action to reset the search.
 */
export const WithClearButton: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="w-[400px]">
        <div className="relative">
          <SearchInput value={value} onChange={setValue} />
          {value && (
            <button
              onClick={() => setValue('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {value ? `Searching for: "${value}"` : 'Type to search...'}
        </p>
      </div>
    );
  }
};

/**
 * Multiple search inputs for advanced filtering.
 * Use this pattern for multi-field search forms.
 */
export const MultipleSearchInputs: Story = {
  render: () => {
    const [nameSearch, setNameSearch] = useState('');
    const [emailSearch, setEmailSearch] = useState('');
    const [locationSearch, setLocationSearch] = useState('');

    return (
      <div className="w-[500px] space-y-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Search by Name</label>
          <SearchInput value={nameSearch} onChange={setNameSearch} />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Search by Email</label>
          <SearchInput value={emailSearch} onChange={setEmailSearch} />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Search by Location</label>
          <SearchInput value={locationSearch} onChange={setLocationSearch} />
        </div>
        <div className="p-3 bg-muted rounded-md text-sm">
          <p className="font-medium mb-2">Active Filters:</p>
          {!nameSearch && !emailSearch && !locationSearch ? (
            <p className="text-muted-foreground">No filters applied</p>
          ) : (
            <ul className="space-y-1">
              {nameSearch && <li>• Name: "{nameSearch}"</li>}
              {emailSearch && <li>• Email: "{emailSearch}"</li>}
              {locationSearch && <li>• Location: "{locationSearch}"</li>}
            </ul>
          )}
        </div>
      </div>
    );
  }
};
