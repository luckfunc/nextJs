export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={'bg-gray-200'}>
      <h1 className={'text-3xl text-blue-600'}>
        Hello Dashboard Layout 👋
      </h1>
      {children}
    </div>
  )
}