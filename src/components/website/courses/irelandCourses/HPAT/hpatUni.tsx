import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { hpatStyles } from "./hpatStyles";
import { UNIVERSITY_TABLE } from "./hpatArray";

const HeaderCell = ({ text }: { text: string }) => (
  <View style={[hpatStyles.cell]}>
      <Text style={hpatStyles.headerText}>{text}</Text>
    </View>
);

const Cell = ({ text, bold }: { text: string; bold?: boolean }) => (
  <View style={hpatStyles.cell}>
    <Text style={[hpatStyles.text, bold && hpatStyles.boldText]}>
      {text}
    </Text>
  </View>
);

export const UniversityTable = () => {
  return (
    <View>
      <View style={hpatStyles.table}>
        {/* Header */}
        <View style={hpatStyles.row}>
          <HeaderCell text="University" />
          <HeaderCell text="CAO Code" />
          <HeaderCell text="EU UG Places (Approx.)" />
          <HeaderCell text="2025 Final Points" />
        </View>

        {/* Rows */}
        {UNIVERSITY_TABLE.map((row, index) => (
          <View key={index} style={hpatStyles.row}>
            <Cell text={row.university} bold />
            <Cell text={row.caoCode} />
            <Cell text={row.places} bold />
            <Cell text={row.points} bold />
          </View>
        ))}
      </View>

      {/* Footnote */}
      <Text style={hpatStyles.footnote}>
        *An asterisk (*) indicates that random selection was applied;
        some students on this score may not have received an offer.
      </Text>
    </View>
  );
};