const getBaseUrl = () => {
  const url =
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_URL
      : process.env.NEXT_PUBLIC_BASE_URL;

  return url;
};

export default getBaseUrl;
