import React from "react";
import { Dimensions } from "react-native";
import { Box, Theme, useTheme } from "../../../components";
import Underlay from "./Underlay";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;
const lerp = (v0: number, v1: number, t: number) => (1 - t) * v0 + t * v1;

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme["colors"];
}

interface GraphProps {
  data: DataPoint[];
}

const Graph = ({ data }: GraphProps) => {
  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing.l;
  const height = canvasHeight - theme.spacing.l;
  const values = data.map((p) => p.value);
  const step = width / data.length;
  const dates = data.map((p) => p.date);
  // const minX = Math.min(...dates);
  // const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  return (
    <Box paddingBottom="l" paddingLeft="l" marginTop="xl">
      <Underlay {...{ dates, minY, maxY, step }} />
      <Box {...{ width, height }}>
        {data.map((point, i) => {
          if (point.value === 0) return null;

          return (
            <Box
              key={point.date}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / maxY)}
            >
              <Box
                backgroundColor={point.color}
                position="absolute"
                opacity={0.1}
                top={0}
                bottom={0}
                borderTopLeftRadius="l"
                borderTopRightRadius="m"
                left={theme.spacing.m}
                right={theme.spacing.m}
              />
              <Box
                backgroundColor={point.color}
                borderRadius="l"
                top={0}
                height={32}
                left={theme.spacing.m}
                right={theme.spacing.m}
                position="absolute"
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Graph;
