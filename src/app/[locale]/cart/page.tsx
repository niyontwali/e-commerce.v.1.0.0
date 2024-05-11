'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const initialItems = [
  {
    program: {
      name: 'Strength Training',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
  },
  {
    program: {
      name: 'Cardio Blast',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
    },
  },
]

interface CartItemProps {
  program: {
    name: string
    price: number
    image: string
  }
  onOrder: () => void
}

const CartItem = ({ program, onOrder }: CartItemProps) => (
  <div className="flex items-center gap-4 py-4 border-b border-green/30">
    <Image
      src={program.image}
      alt={program.name}
      width={96}
      height={96}
      className="rounded-lg"
    />
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-black">{program.name}</h3>
      <p className="text-sm text-green-500">${program.price}</p>
      <Button
        variant="outline"
        size="sm"
        onClick={onOrder}
        className="mt-2 hover:bg-green-100 text-green transition-colors px-5 border-green hover:bg-green hover:text-white"
      >
        Pay Program
      </Button>
    </div>
  </div>
)

interface CartSummaryProps {
  total: number
  itemCount: number
  onOrderAll: () => void
}

const CartSummary = ({ total, itemCount, onOrderAll }: CartSummaryProps) => (
  <div className="bg-green-50 rounded-lg p-6">
    <div className="flex justify-between mb-4">
      <span className="text-sm text-black font-bold">Programs</span>
      <span className="text-black font-bold">{itemCount}</span>
    </div>
    <div className="flex justify-between mb-4">
      <span className="text-lg text-black font-semibold">Total</span>
      <span className="text-2xl text-black font-bold">${total.toFixed(2)}</span>
    </div>
    <Button
      color="green"
      onClick={onOrderAll}
      className="w-full bg-green text-white"
    >
      Pay for All Programs (${total.toFixed(2)})
    </Button>
  </div>
)

const CartPage = () => {
  const [items, setItems] = useState(initialItems)

  const handleOrder = (index: number) => {
    // Handle order for a single program
    console.log(`Ordering program at index ${index}`)
  }

  const handleOrderAll = () => {
    // Handle order for all programs in the cart
    console.log('Ordering all programs')
  }

  const itemCount = items.length
  const total = items.reduce((total, item) => total + item.program.price, 0)

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-semibold text-black mb-8">
        Your Gym Programs
      </h2>
      <div className="bg-white rounded-lg border-[1px] border-green/20 p-6 mb-8">
        {items.map((item, index) => (
          <CartItem
            key={item.program.name}
            program={item.program}
            onOrder={() => handleOrder(index)}
          />
        ))}
      </div>
      <CartSummary
        total={total}
        itemCount={itemCount}
        onOrderAll={handleOrderAll}
      />
    </div>
  )
}

export default CartPage