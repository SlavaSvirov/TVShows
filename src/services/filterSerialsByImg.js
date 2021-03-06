export const filterSerialsByImg = (serials, withImages) => {
  return !withImages
    ? serials
    : serials.filter((serial) => !!serial.show.image);
};
