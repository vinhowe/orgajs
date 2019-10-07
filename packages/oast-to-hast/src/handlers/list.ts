import { all } from '../transform'

/* Transform a list. */
export default (h, node) => {
  var props: any = {}
  var name = node.ordered ? 'ol' : 'ul'
  if (node.descriptive) {
    name = 'dl'
  }

  if (typeof node.start === 'number' && node.start !== 1) {
    props.start = node.start
  }

  return h(node, name, props, all(h, node))
}
