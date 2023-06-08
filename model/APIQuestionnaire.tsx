export interface APIQuestionnaire {
    //changed_date: string, // Fill in the appropriate value
    children: [], //Unsure
    //creation_date: string, // Fill in the appropriate value
    depth: number,
    id: number,
    is_deleted: boolean,
    language: string, // Fill in the appropriate value
    media: any, //Unsure
    name: string,
    number_child: number,
    parent: any, //Unsure
    path: any, //Unsure
    placeholder: number,
    position: number,
    properties: {}, //Unsure
    study: number,
    type: number // Assuming the type is always 20 for questionnaires
  }