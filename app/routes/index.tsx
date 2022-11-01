import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Form, useLoaderData, useSubmit } from '@remix-run/react'
import users from '~/users.json'

type User = {
  id: number
  firstName: string
  lastName: string
}

type LoaderType = {
  users: User[]
  sortBy: keyof User
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const sortBy = (url.searchParams.get('sortBy') ?? 'firstName') as keyof User

  const sortedUsers = users.sort((a: User, b: User) =>
    a[sortBy] < b[sortBy] ? -1 : 1,
  )

  return json({ users: sortedUsers, sortBy })
}

export default function Index() {
  const { users, sortBy } = useLoaderData<LoaderType>()
  const submit = useSubmit()
  const handleChange = (e: any) => submit(e.target.form)

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to Remix Search Params by Form
      </h1>
      <Form method="get" onChange={handleChange}>
        <span>Sort by: </span>
        <select
          name="sortBy"
          defaultValue={sortBy}
          className="border p-2 rounded"
        >
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
        </select>
        <noscript>
          <button className="ml-4 bg-blue-300 px-4 py-2 rounded">Submit</button>
        </noscript>
      </Form>
      <table className="mt-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">First Name</th>
            <th className="p-2">Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="even:bg-green-100">
              <td className="p-2">{user.firstName}</td>
              <td className="p-2">{user.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
