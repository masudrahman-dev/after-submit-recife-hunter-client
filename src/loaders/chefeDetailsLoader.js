const chefeDetailsLoader = async ({ params }) => {
  const res = await fetch(
    `https://b7a10-chef-recipe-hunter-server-side-masudrahma-masudrahman-dev.vercel.app/home/${params.id}`
    // `https://b7a10-chef-recipe-hunter-server-side-masudrahma-masudrahman-dev.vercel.app/home/`
  );
  const data = await res.json();
  // console.log('data :>> ', data);
  return data;
};

export default chefeDetailsLoader;
