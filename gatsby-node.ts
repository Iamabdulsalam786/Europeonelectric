import type {GatsbyNode} from "gatsby"
import webpack from 'webpack'

export const onCreatePage: GatsbyNode["onCreatePage"] = ({page, actions}) => {
    const {deletePage} = actions

    // Ignore all component folders inside pages
    if (page.path.includes("/components/")) {
        deletePage(page)
    }
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({actions}) => {
    actions.setWebpackConfig({
        plugins: [
            new webpack.DefinePlugin({
                'typeof window': `(typeof window !== 'undefined' ? 'object' : 'undefined')`,
                'window.scrollY': '0',
                'window.scrollX': '0',
                'window.pageYOffset': '0',
                'window.pageXOffset': '0',
            }),
        ],
    })
}