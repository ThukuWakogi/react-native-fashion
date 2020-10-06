import { useTheme } from "@shopify/restyle";
import React from "react";
import { Dimensions } from "react-native";
import { Box, Theme } from "../../components";

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
  const theme = useTheme<Theme>();
  const width = wWidth - theme.spacing.m * 2;
  const height = width * aspectRatio;
  const dates = data.map((p) => p.date);
  const minX = Math.min(...dates);
  const maxX = Math.max(...dates);
  const values = data.map((p) => p.value);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const step = width / data.length;

  return (
    <Box {...{ width, height }} marginTop="xl">
      {data.map((point, i) => {
        if (point.value === 0) return null;

        console.log({
          height,
          point,
          t: point.value,
          r: lerp(0, height, point.value / height),
          left: 1 * step,
        });

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
  );
};

export default Graph;
