import React from "react";
import { User, columns } from "./column";
import { DataTable } from "@/components/data-table";

async function getUsers():Promise<User[]> {
    const res = await fetch(
		"https://65f29fc2034bdbecc7655d59.mockapi.io/users"
	);
    const data = await res.json();
    return data;
}
const  Page = async () => {
    const data = await getUsers()
	return (
		<section className="py-24">
			<div className="container">
                <h1 className="text-3xl font-bold">All Users</h1>
                <DataTable columns={columns} data={data} />
			</div>
		</section>
	);
};

export default Page;
