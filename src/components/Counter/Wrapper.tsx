import styled, {
  ThemedStyledProps,
  FlattenInterpolation,
} from 'styled-components'

export type WrapperProps = {
  styles?: FlattenInterpolation<ThemedStyledProps<WrapperProps, any>>
  primary: boolean
}

const Wrapper = styled.div<WrapperProps>`
  ${props => props.styles}
`

export default Wrapper
