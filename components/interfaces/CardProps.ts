export default interface Props {
  cType: string;
  data:
    | {
        title: string;
        timeframes: {
          daily: {
            current: number;
            previous: number;
          };
          weekly: {
            current: number;
            previous: number;
          };
          monthly: {
            current: number;
            previous: number;
          };
        };
      }
    | undefined;
}
