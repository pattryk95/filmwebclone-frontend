import { actorCreationDTO } from "../actors/actors.model";

export function converActorToFormData(actor: actorCreationDTO): FormData {
  const formData = new FormData();

  formData.append("firstName", actor.firstName);
  if (actor.middleName) {
    formData.append("middleName", actor.middleName);
  }

  formData.append("lastName", actor.lastName);

  if (actor.biography) {
    formData.append("biography", actor.biography);
  }

  if (actor.dateOfBirth) {
    formData.append("dateOfBirth", formatDate(actor.dateOfBirth));
  }

  if (actor.picture) {
    formData.append("picture", actor.picture);
  }

  return formData;
}

function formatDate(date: Date) {
  date = new Date(date);
  const format = new Intl.DateTimeFormat("pl", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [{ value: month }, { value: day }, { value: year }] =
    format.formatToParts(date);

  return `${day}.${month}.${year}`;
}
