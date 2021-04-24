import React from "react";
import Image from "next/image";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderIteam";

export const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex max-w-2xl flex-grow justify-evenly">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UsersIcon} />
      </div>
      <Image
        className="object-contain"
        src="/vercel.svg"
        width={200}
        height={100}
        alt="Logo"
      />
    </div>
  );
};
