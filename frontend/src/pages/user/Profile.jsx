import { Card, CardBody, Typography } from '@material-tailwind/react'
import React, { useState, useEffect } from "react";
import { useStateContext } from "../../contexts/NavigationContext";

export default function Profile() {
    const { user } = useStateContext();
  return (
    <>
       <Card className="h-fit rounded-none mx-3 md:mx-5 md:ml-8 mr-3 font-inter">
      <CardBody className="flex flex-col min-h-[80vh] gap-5 p-3 pl-6">
        <p>{user ? `Logged in as: ${user?.email}` : "Not logged in"}</p>
        <p>{user?.email}</p>
        <p>{user?.role}</p>
        <p>{user?.firstName}</p>
        <p>{user?.lastName}</p>
      </CardBody>
    </Card>
    </>
  )
}
