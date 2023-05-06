const loader = async () => {
  const res = await fetch(
    "https://b7a10-chef-recipe-hunter-server-side-masudrahma-masudrahman-dev.vercel.app/home"
  );
  const data = await res.json();

  return data;
};

export default loader;
