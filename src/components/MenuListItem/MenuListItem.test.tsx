import { describe, expect, it, vi } from 'vitest'
import { getCorrectColorOfTemperature } from './MenuListItem.helpers.ts'
import { render, screen } from '@testing-library/react'
import { MenuListItem } from './MenuListItem.tsx'

const mockUsedNavigate = vi.fn()
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate
}))

describe('get correct value of color', async () => {
  it.each([
    [
      {
        actualTemperature: 15,
        targetTemperature: 15.4
      },
      'text-lime-500'
    ],
    [
      {
        actualTemperature: 9,
        targetTemperature: 8.5
      },
      'text-lime-500'
    ]
  ])(
    '%j should return %s',
    async ({ actualTemperature, targetTemperature }, expected) => {
      expect(
        getCorrectColorOfTemperature(actualTemperature, targetTemperature)
      ).toEqual(expected)
    }
  )
})

describe('get correct value of color', async () => {
  it.each([
    [
      {
        actualTemperature: 15,
        targetTemperature: 15.6
      },
      'text-red-700'
    ],
    [
      {
        actualTemperature: 9,
        targetTemperature: 8.4
      },
      'text-red-700'
    ]
  ])(
    '%j should return %s',
    async ({ actualTemperature, targetTemperature }, expected) => {
      expect(
        getCorrectColorOfTemperature(actualTemperature, targetTemperature)
      ).toEqual(expected)
    }
  )
})

describe('Menu List Item test', () => {
  it('should renders actual temperature and show correct value', () => {
    render(
      <MenuListItem
        name="Name"
        available
        targetTemperature={15}
        moduleId="jhvarg65e4h613stht6re4"
        actualTemperature={14}
      />
    )
    const actualTemperatureContainer = screen.getByTestId(
      'actual-temperature-container'
    )

    expect(
      screen.getAllByTestId('actual-temperature-container').length
    ).toEqual(1)
    expect(actualTemperatureContainer.textContent).toContain('14')
  })

  it('should not renders actual temperature', () => {
    render(
      <MenuListItem
        name="Name"
        available
        targetTemperature={15}
        moduleId="jhvarg65e4h613stht6re4"
      />
    )
    const container = screen.queryByTestId('actual-temperature-container')

    expect(container).toBeNull()
  })
})
