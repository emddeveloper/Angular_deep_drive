export interface WikiModel {
  search: [
    {
      ns: number;
      title: string;
      pageid: number;
      size: number;
      wordcount: number;
      snippet: string;
      timestamp: any;
    }
  ];
}
