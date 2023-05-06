const slideLoader = async () => {
  const res = await fetch(
    `https://b7a10-chef-recipe-hunter-server-side-masudrahma-masudrahman-dev.vercel.app/home/`
    // `https://b7a10-chef-recipe-hunter-server-side-masudrahma-masudrahman-dev.vercel.app/home/`
  );
  const data = await res.json();
  // console.log('data :>> ', data);
  return data;
};

export default slideLoader;
