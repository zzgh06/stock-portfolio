import { useCreatePortfolio } from "@/hooks/useCreatePortfolio";
import { useState } from "react"

export default function AddPortfolioForm() {
  const [name, setName] = useState('');

  const { mutate: createPortfolio, isPending } = useCreatePortfolio()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPortfolio(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Portfolio Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
      >
        {isPending ? '생성 중...' : '포트폴리오 생성'}
      </button>
    </form>
  )
}