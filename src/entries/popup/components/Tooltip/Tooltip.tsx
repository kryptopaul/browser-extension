import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React, { ReactNode } from 'react';

import { useCurrentThemeStore } from '~/core/state/currentSettings/currentTheme';
import { Box, Inline, Text, ThemeProvider } from '~/design-system';
import { TextStyles } from '~/design-system/styles/core.css';

export const Tooltip = ({
  children,
  text,
  textSize,
  textWeight,
  textColor,
}: {
  children: ReactNode;
  text: string;
  textSize?: TextStyles['fontSize'];
  textWeight?: TextStyles['fontWeight'];
  textColor?: TextStyles['color'];
}) => {
  const { currentTheme } = useCurrentThemeStore();

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content className="TooltipContent" sideOffset={10}>
            <ThemeProvider theme={currentTheme}>
              <Box borderRadius="6px" boxShadow="24px">
                <Inline alignHorizontal="center">
                  <Box
                    background="surfaceSecondaryElevated"
                    backdropFilter="blur(26px)"
                    position="absolute"
                    borderRadius="2px"
                    marginBottom="-3px"
                    bottom="0"
                    style={{
                      height: 10,
                      width: 10,
                      rotate: '45deg',
                    }}
                  />
                </Inline>
                <Box
                  background="surfaceSecondaryElevated"
                  padding="7px"
                  borderRadius="6px"
                  backdropFilter="blur(26px)"
                >
                  <Text
                    color={textColor || 'label'}
                    size={textSize || '16pt'}
                    weight={textWeight || 'bold'}
                  >
                    {text}
                  </Text>
                </Box>
              </Box>
            </ThemeProvider>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};