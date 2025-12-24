import { useState, useCallback, useMemo } from 'react';
import type { SectionConfig, MainSectionConfig } from './layout';

export interface UseLayoutSectionsOptions {
  initialSidebarSection?: SectionConfig;
  initialEditorSection: MainSectionConfig;
  initialTerminalSection?: SectionConfig;
  initialAuxiliarySection?: SectionConfig;
}

export interface UseLayoutSectionsReturn {
  sidebarSection: SectionConfig | undefined;
  editorSection: MainSectionConfig;
  terminalSection: SectionConfig | undefined;
  auxiliarySection: SectionConfig | undefined;

  setSidebarSection: (section: SectionConfig | undefined) => void;
  setEditorSection: (section: MainSectionConfig) => void;
  setTerminalSection: (section: SectionConfig | undefined) => void;
  setAuxiliarySection: (section: SectionConfig | undefined) => void;

  setSidebarContent: (content: React.ReactNode) => void;
  setEditorContent: (content: React.ReactNode) => void;
  setTerminalContent: (content: React.ReactNode) => void;
  setAuxiliaryContent: (content: React.ReactNode) => void;

  toggleSidebar: () => void;
  toggleTerminal: () => void;
  toggleAuxiliary: () => void;

  showSidebar: (section?: SectionConfig) => void;
  hideSidebar: () => void;
  showTerminal: (section?: SectionConfig) => void;
  hideTerminal: () => void;
  showAuxiliary: (section?: SectionConfig) => void;
  hideAuxiliary: () => void;

  isSidebarVisible: boolean;
  isTerminalVisible: boolean;
  isAuxiliaryVisible: boolean;
}

export function useLayoutSections(options: UseLayoutSectionsOptions): UseLayoutSectionsReturn {
  const [sidebarSection, setSidebarSection] = useState<SectionConfig | undefined>(options.initialSidebarSection);
  const [editorSection, setEditorSection] = useState<MainSectionConfig>(options.initialEditorSection);
  const [terminalSection, setTerminalSection] = useState<SectionConfig | undefined>(options.initialTerminalSection);
  const [auxiliarySection, setAuxiliarySection] = useState<SectionConfig | undefined>(options.initialAuxiliarySection);

  const [prevSidebarSection, setPrevSidebarSection] = useState<SectionConfig | undefined>(options.initialSidebarSection);
  const [prevTerminalSection, setPrevTerminalSection] = useState<SectionConfig | undefined>(options.initialTerminalSection);
  const [prevAuxiliarySection, setPrevAuxiliarySection] = useState<SectionConfig | undefined>(options.initialAuxiliarySection);

  const setSidebarContent = useCallback((content: React.ReactNode) => {
    setSidebarSection(prev => prev ? { ...prev, content } : { content });
  }, []);

  const setEditorContent = useCallback((content: React.ReactNode) => {
    setEditorSection(prev => ({ ...prev, content }));
  }, []);

  const setTerminalContent = useCallback((content: React.ReactNode) => {
    setTerminalSection(prev => prev ? { ...prev, content } : { content });
  }, []);

  const setAuxiliaryContent = useCallback((content: React.ReactNode) => {
    setAuxiliarySection(prev => prev ? { ...prev, content } : { content });
  }, []);

  const toggleSidebar = useCallback(() => {
    if (sidebarSection) {
      setPrevSidebarSection(sidebarSection);
      setSidebarSection(undefined);
    } else {
      setSidebarSection(prevSidebarSection);
    }
  }, [sidebarSection, prevSidebarSection]);

  const toggleTerminal = useCallback(() => {
    if (terminalSection) {
      setPrevTerminalSection(terminalSection);
      setTerminalSection(undefined);
    } else {
      setTerminalSection(prevTerminalSection);
    }
  }, [terminalSection, prevTerminalSection]);

  const toggleAuxiliary = useCallback(() => {
    if (auxiliarySection) {
      setPrevAuxiliarySection(auxiliarySection);
      setAuxiliarySection(undefined);
    } else {
      setAuxiliarySection(prevAuxiliarySection);
    }
  }, [auxiliarySection, prevAuxiliarySection]);

  const showSidebar = useCallback((section?: SectionConfig) => {
    if (section) {
      setSidebarSection(section);
      setPrevSidebarSection(section);
    } else if (prevSidebarSection) {
      setSidebarSection(prevSidebarSection);
    }
  }, [prevSidebarSection]);

  const hideSidebar = useCallback(() => {
    if (sidebarSection) {
      setPrevSidebarSection(sidebarSection);
    }
    setSidebarSection(undefined);
  }, [sidebarSection]);

  const showTerminal = useCallback((section?: SectionConfig) => {
    if (section) {
      setTerminalSection(section);
      setPrevTerminalSection(section);
    } else if (prevTerminalSection) {
      setTerminalSection(prevTerminalSection);
    }
  }, [prevTerminalSection]);

  const hideTerminal = useCallback(() => {
    if (terminalSection) {
      setPrevTerminalSection(terminalSection);
    }
    setTerminalSection(undefined);
  }, [terminalSection]);

  const showAuxiliary = useCallback((section?: SectionConfig) => {
    if (section) {
      setAuxiliarySection(section);
      setPrevAuxiliarySection(section);
    } else if (prevAuxiliarySection) {
      setAuxiliarySection(prevAuxiliarySection);
    }
  }, [prevAuxiliarySection]);

  const hideAuxiliary = useCallback(() => {
    if (auxiliarySection) {
      setPrevAuxiliarySection(auxiliarySection);
    }
    setAuxiliarySection(undefined);
  }, [auxiliarySection]);

  const isSidebarVisible = sidebarSection !== undefined;
  const isTerminalVisible = terminalSection !== undefined;
  const isAuxiliaryVisible = auxiliarySection !== undefined;

  return useMemo(() => ({
    sidebarSection,
    editorSection,
    terminalSection,
    auxiliarySection,

    setSidebarSection,
    setEditorSection,
    setTerminalSection,
    setAuxiliarySection,

    setSidebarContent,
    setEditorContent,
    setTerminalContent,
    setAuxiliaryContent,

    toggleSidebar,
    toggleTerminal,
    toggleAuxiliary,

    showSidebar,
    hideSidebar,
    showTerminal,
    hideTerminal,
    showAuxiliary,
    hideAuxiliary,

    isSidebarVisible,
    isTerminalVisible,
    isAuxiliaryVisible,
  }), [
    sidebarSection,
    editorSection,
    terminalSection,
    auxiliarySection,
    setSidebarContent,
    setEditorContent,
    setTerminalContent,
    setAuxiliaryContent,
    toggleSidebar,
    toggleTerminal,
    toggleAuxiliary,
    showSidebar,
    hideSidebar,
    showTerminal,
    hideTerminal,
    showAuxiliary,
    hideAuxiliary,
    isSidebarVisible,
    isTerminalVisible,
    isAuxiliaryVisible,
  ]);
}
