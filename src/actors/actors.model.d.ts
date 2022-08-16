export interface actorDTO {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  biography: string;
  dateOfBirth: Date;
  picture: string;
}

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
  firstName: string;
  middleName?: string;
  lastName: string;
  character: string;
  picture: string;
}
