export interface actorCreationDTO {
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth?: Date;
  picture?: File;
  pictureURL?: string;
  biography?: string;
}

export interface actorMovieDTO {
  id: number;
  name: string;
  character: string;
  picture: string;
}
