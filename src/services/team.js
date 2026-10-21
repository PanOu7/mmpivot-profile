export const teamApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/content/items/teams`;

export const fetchTeam = (...args) =>
  fetch(...args,{
    method : "GET",
    headers : {
        "api-key" : process.env.NEXT_PUBLIC_TOKEN
    }
  }).then((res) => res.json());
