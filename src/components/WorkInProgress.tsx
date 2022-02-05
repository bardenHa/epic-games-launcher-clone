const WorkInProgress: React.FunctionComponent<{ text?: string }> = ({
  text,
}) => {
  return (
    <main className="flex items-center justify-center w-full bg-red-500 border border-black min-h-main">
      <h1 className="text-3xl font-semibold md:text-5xl lg:text-7xl">
        Work in progress 🚧
        {text}
      </h1>
    </main>
  )
}

export default WorkInProgress
