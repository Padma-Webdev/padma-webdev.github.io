import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { hpatStyles } from "./hpatStyles";

export interface HpatRow {
  section: string;
  questions: string;
  time: string;
  avgTime: string;
  bold?: boolean;
}

export const HPAT_TABLE: HpatRow[] = [
  {
    section: "Section 1: Logical Reasoning & Problem Solving",
    questions: "42",
    time: "60",
    avgTime: "~86 Seconds",
  },
  {
    section: "Section 2: Interpersonal Understanding",
    questions: "42",
    time: "50",
    avgTime: "~72 Seconds",
  },
  {
    section: "Section 3: Non-Verbal Reasoning",
    questions: "30",
    time: "40",
    avgTime: "80 Seconds",
    bold: true,
  },
  {
    section: "Total",
    questions: "114",
    time: "150 (2.5 Hours)",
    avgTime: "~79 Seconds",
    bold: true,
  },
];

const HeaderCell = ({ text }: { text: string }) => (
  <View style={[hpatStyles.cell]}>
    <Text style={hpatStyles.headerText}>{text}</Text>
  </View>
);

const Cell = ({
  text,
  bold,
}: {
  text: string;
  bold?: boolean;
}) => (
  <View style={hpatStyles.cell}>
    <Text style={[hpatStyles.text, bold && hpatStyles.boldText]}>
      {text}
    </Text>
  </View>
);

export const HpatTable = () => {
  return (
    <View style={hpatStyles.table}>
      {/* Header */}
      <View style={hpatStyles.row}>
        <HeaderCell text="HPAT Section" />
        <HeaderCell text="Number of Questions" />
        <HeaderCell text="Time (Minutes)" />
        <HeaderCell text="Avg. Time Per Question" />
      </View>

      {/* Rows */}
      {HPAT_TABLE.map((row, index) => (
        <View key={index} style={hpatStyles.row}>
          <Cell text={row.section} bold={row.bold} />
          <Cell text={row.questions} bold={row.bold} />
          <Cell text={row.time} bold={row.bold} />
          <Cell text={row.avgTime} bold={row.bold} />
        </View>
      ))}
    </View>
  );
};