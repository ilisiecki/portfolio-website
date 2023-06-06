export default function Home() {
  return (
    <main>
      <div className="mx-auto flex h-48 w-48 items-center justify-center bg-white">
        <div className="flex h-24 w-24 items-center justify-center border-[1px] border-black">
          <div className="group flex cursor-pointer flex-col items-end gap-2">
            <div className="h-1.5 w-16 rounded-full bg-black"></div>
            <div className="h-1.5 w-8 rounded-full bg-black transition-all duration-100 ease-in-out	group-hover:w-16"></div>
            <div className="h-1.5 w-12 rounded-full bg-black transition-all duration-100 ease-in-out	group-hover:w-16"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
