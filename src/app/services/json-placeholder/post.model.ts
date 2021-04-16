import { DataRow } from "../../components/table/table.store";

export interface Post extends DataRow {
  body: string;
  id: number;
  title: string;
  userId: number;
}
