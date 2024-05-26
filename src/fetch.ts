export const fetchPersonName = async (id: string): Promise<string> => {
  return `Name ${id}`;
};

export const fetchPersonAddress = async (id: string): Promise<string> => {
  return `Address ${id}`;
};
