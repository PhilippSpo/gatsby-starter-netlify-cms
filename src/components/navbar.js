import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Nav from './nav'
import Toolbar from './toolbar'
import ResponsiveContainer from './responsive-container'
import colors from '../constants/colors'

const HorizontalBar = styled.div`
  background-color: ${colors.white};
  position: sticky;
  top: 0;
  z-index: 1;
`

const HeaderToolbar = styled(Toolbar)`
  height: 64px;
`

const Logo = styled(Link)`
  color: ${colors.black};
  text-decoration: none;
`

const Navbar = props => (
  <HorizontalBar>
    <ResponsiveContainer>
      <HeaderToolbar>
        <Logo to="/">
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            height="45"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 20000 6000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#2b2a29" fillRule="nonzero">
              <path d="m3741 1406h428v-401h413l755 401h623l-863-401h247c145 0 251-16 319-47 68-32 101-85 101-159v-249c0-74-33-127-101-158-68-32-174-48-319-48h-1603zm1407-879c68 0 117 6 149 16 31 10 47 33 47 69v127c0 36-16 59-47 69-32 11-81 16-149 16h-979v-297z" />
              <path d="m7044 1207v-673h1436v673zm-435-612v560c0 49 8 91 24 124 15 32 41 58 78 77 36 18 84 31 143 39 59 7 132 11 219 11h1378c87 0 160-4 219-11 60-8 107-21 144-39 36-19 62-45 78-77 15-33 23-75 23-124v-560c0-49-8-90-23-123-16-33-42-59-78-77-37-19-84-32-144-39-59-8-132-12-219-12h-1378c-87 0-160 4-219 12-59 7-107 20-143 39-37 18-63 44-78 77-16 33-24 74-24 123z" />
              <path d="m10286 1406h438v-481l968-581h-511l-645 408-642-408h-580l972 587z" />
              <path d="m11638 1406h435l218-232h1185l225 232h489l-1073-1062h-420zm837-424 417-432 403 432z" />
              <path d="m14792 1406h1838v-199h-1403v-863h-435z" />
              <path d="m1158 4315c-18-6-30-10-36-13-29-13-41-31-38-50 3-22 9-40 19-51 6-8 19-17 37-25h70c114-8 211-48 288-118 41-37 77-88 108-156 22-47 44-113 69-197l545-1790h923l1140 3789-1047-4-192-573h-1159l-210 573h-1015l336-1162c108-6 194-11 256-17 189-23 327-62 414-120 87-57 157-119 209-183 65-81 116-177 150-286l358-1196-93-358-377 1225c-44 152-84 267-121 345-53 113-113 193-182 241-90 59-192 98-307 118-37 5-86 8-145 8zm610-2320c16-56 58-84 126-84 38 0 62 14 75 42 3 8 6 23 9 42l-530 1739c-13 45-29 83-47 116-19 32-44 57-75 73-16 9-37 14-65 17s-54 6-79 8zm704 1145-368 1162h670l-79 228-293 54 190 173-46 248 261-126 251 135-42-253 206-177-290-50-111-232z" />
              <path d="m5075 1885h991l834 2345 814-2340h1411v3785l-1006-5v-2029l-670 2021h-1099l-689-2000v2004h-1006v-1132c72-11 129-23 173-34 130-36 248-90 354-159 59-40 116-102 172-186 68-104 102-202 102-295v-808l-205-526v1220c0 82-7 149-21 201s-42 101-86 149c-43 48-107 93-191 134-83 43-149 64-196 64-33 0-60-9-80-27-21-18-26-39-17-62 6-11 55-34 147-69 91-35 156-75 193-120 28-31 47-67 58-107 11-41 17-86 17-133 0-31 0-53 0-67zm-420 1824v-1575c0-37 0-63 0-80 0-53 7-93 19-120s40-40 83-40c38 0 63 14 75 42s18 67 18 118v80 1579c0 56-7 101-22 135-16 34-50 59-103 75-31 9-50-5-58-40-8-34-12-64-12-86 0-42 0-72 0-88zm3628-624 255 97-69-231 191-177-275-38-121-228-126 228-252 46 192 173-42 219zm-1383 1154-126 232-298 29 237 189-60 254 261-123 269 135-60-266 200-198-288-16z" />
              <path d="m10484 5700h-1005v-3785h1542c173 0 319 17 437 50 118 34 236 96 353 186 94 73 184 192 271 357 77 152 116 268 116 346 0 20-3 33-9 42-6 11-17 14-32 9-26-4-53-9-82-18-30-8-58-59-86-151s-65-176-112-253c-59-95-132-175-219-239-167-121-374-182-619-182h-503c-38 0-56 35-56 105 0 65 18 98 56 98h475c87 0 158 5 214 16s122 36 201 72c105 50 190 143 255 278 93 191 152 303 177 336 44 57 97 99 161 127s125 55 184 80c27 17 27 35 0 54-28 20-74 30-139 30-81 0-160-28-239-84-59-42-105-91-139-148-68-139-116-239-144-298-50-104-112-179-187-223-99-59-212-89-340-89h-466c-27 0-44 6-50 17-9 17-15 48-15 93 0 61 22 93 65 93h401c63 0 118 7 168 22 49 16 98 45 147 89 48 43 96 125 147 246 49 121 103 208 162 261 87 79 216 145 387 198 56 17 133 36 233 59-16 120-37 216-65 286-91 219-244 393-462 522-140 85-327 145-563 182-164 25-330 37-498 37-31 0-61 0-89 0-9 0-20-1-33-4zm-4-2926v872l-79 243-279 39 195 181-51 252 261-118 261 123-57-257 196-198-293-22-75-243h312c134 0 232-32 296-95 63-63 95-182 95-356 0-188-47-312-140-371-52-33-145-50-279-50z" />
              <path d="m12575 1911h1053v3789l-1053 4zm545 1465-112 236-274 13 195 205-88 254 284-123 266 118-65-244 195-207-270-12z" />
              <path d="m14973 5700h-1005v-3785h1542c174 0 319 17 437 50 118 34 236 96 354 186 93 73 183 192 270 357 77 152 116 268 116 346 0 20-3 33-9 42-6 11-17 14-32 9-25-4-52-9-82-18-30-8-58-59-86-151s-65-176-112-253c-59-95-132-175-219-239-167-121-374-182-619-182h-503c-38 0-56 35-56 105 0 65 18 98 56 98h475c87 0 158 5 214 16 57 11 123 36 201 72 105 50 190 143 255 278 93 191 152 303 178 336 43 57 96 99 160 127s125 55 184 80c28 17 28 35 0 54-28 20-74 30-139 30-81 0-160-28-238-84-59-42-106-91-139-148-69-139-117-239-145-298-50-104-112-179-187-223-99-59-212-89-339-89h-466c-28 0-45 6-51 17-9 17-15 48-15 93 0 61 22 93 66 93h400c63 0 119 7 168 22 50 16 98 45 147 89 48 43 96 125 147 246 49 121 103 208 162 261 87 79 216 145 387 198 56 17 133 36 233 59 0 59-2 107-5 143-16 112-49 213-100 301-51 89-117 168-198 238-25 22-62 51-111 84l577 1440-1057 4-596-1599 223-194-293-22-75-243h312c134 0 232-32 296-95 63-63 95-182 95-356 0-188-47-312-140-371-52-33-145-50-279-50h-363v872l-79 243-279 39 196 181-52 252 218-101z" />
              <path d="m18201 3426h1210c59 0 92 2 98 4 18 12 28 33 28 64 0 36-13 57-40 63-26 5-53 9-81 9h-1085c-43 0-77 4-101 12-22 9-35 36-35 80 0 45 11 73 31 82 20 10 54 15 100 15h1080c47 0 75 2 84 4 31 9 47 31 47 68 0 25-9 44-26 56-17 13-51 19-100 19h-1071c-25 0-50 0-74 0-47 9-71 42-71 101 0 37 9 63 27 78 16 16 56 24 118 24h1066c47 0 75 1 84 4 28 8 42 30 42 67 0 54-41 80-121 80h-1210v640h1340v804h-2361v-3789h2352v863h-1607l-139-207-136 207-302 25 229 211-43 240 256-101 247 101-51-245 215-164z" />
            </g>
          </svg>
        </Logo>
        <Nav location={props.location} />
      </HeaderToolbar>
    </ResponsiveContainer>
  </HorizontalBar>
)

Navbar.propTypes = {
  location: PropTypes.object
}

export default Navbar
