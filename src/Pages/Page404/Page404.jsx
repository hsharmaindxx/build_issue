"use client"
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Errorimg from "../../Assets/Images/404Img.png";
import Link from "next/link";
import Image from "next/image";

export default function Page404() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Box component="div" className="container MT1">
      <Box className="MA TAC">
        <Image src={Errorimg} alt="error img" className="errorImage404"/>
      </Box>
      {/* <Box className="TAC"> */}
      <Typography className="ErropageRedheading TAC" variant="h1">
        The page you were looking for doesn't exist.
      </Typography>
      <Typography className="ErropageBlacktext TAC" variant="p" component={"p"}>
        You may have mistyped the address or the page may have moved.{" "}
      </Typography>
      <Typography className="ErropageRedtext TAC" variant="p" component={"p"}>
        {"Try our "}
        <Link href={"/"} className="ErropageLink">
          {"homepage"}
        </Link>
        {" or "}
        <Link href={"/news-&-research"} className="ErropageLink">
          {"research"}
        </Link>
        {" section instead."}
      </Typography>
      {/* </Box> */}
    </Box>
  );
}
