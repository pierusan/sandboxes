import { ComponentProps, useState } from "react";
import {
  Flex,
  Button,
  defaultTheme,
  Provider,
  NumberField,
  Grid,
  View,
  TextField,
  Picker,
  Item,
  ActionButton,
  Content,
  Text,
  DialogTrigger,
  Dialog,
  Heading,
  Divider,
  Header,
  ButtonGroup,
  Section,
  Well,
  Keyboard,
  Meter,
  ProgressBar,
  ProgressCircle,
  StatusLight,
  useProvider,
  ActionGroup,
  LogicButton,
  ToggleButton,
  ListBox,
  Checkbox,
  CheckboxGroup,
  SearchField,
  Switch,
  TextArea,
  Breadcrumbs,
  Link as AdobeLink,
  Tabs,
  TabList,
  TabPanels,
  ContextualHelp,
  TooltipTrigger,
  Tooltip,
  ComboBox,
  RangeSlider,
  Slider,
} from "@adobe/react-spectrum";
import { ActionMenu, Menu, MenuTrigger } from "@react-spectrum/menu";

import Book from "@spectrum-icons/workflow/Book";
import Draw from "@spectrum-icons/workflow/Draw";
import BulkEditUsers from "@spectrum-icons/workflow/BulkEditUsers";
import Light from "@spectrum-icons/workflow/Light";
import Moon from "@spectrum-icons/workflow/Moon";
import Copy from "@spectrum-icons/workflow/Copy";
import Paste from "@spectrum-icons/workflow/Paste";
import Cut from "@spectrum-icons/workflow/Cut";
import Delete from "@spectrum-icons/workflow/Delete";
import TextStyle from "@spectrum-icons/workflow/TextStyle";
import TagBold from "@spectrum-icons/workflow/TagBold";
import TagItalic from "@spectrum-icons/workflow/TagItalic";
import TagUnderline from "@spectrum-icons/workflow/TagUnderline";
import TextStrikethrough from "@spectrum-icons/workflow/TextStrikethrough";
import Move from "@spectrum-icons/workflow/Move";
import Duplicate from "@spectrum-icons/workflow/Duplicate";
import Brush from "@spectrum-icons/workflow/Brush";
import Select from "@spectrum-icons/workflow/Select";
import RegionSelect from "@spectrum-icons/workflow/RegionSelect";
import Crop from "@spectrum-icons/workflow/Crop";
import CropRotate from "@spectrum-icons/workflow/CropRotate";
import Slice from "@spectrum-icons/workflow/Slice";
import CloneStamp from "@spectrum-icons/workflow/CloneStamp";
import ThumbUp from "@spectrum-icons/workflow/ThumbUp";

// "All React Spectrum components support a limited set of styling options,
// including layout, spacing, sizing, and positioning options. While internal
// component styles such as padding, colors, borders and text styles are
// included in Spectrum and not available to override, external styles like
// margins and sizes can be set on all components."
// https://react-spectrum.adobe.com/react-spectrum/styling.html
// Here's an approach to customize some layout options and make them reusable.
// This could also probably be done with styled-components by using the
// styled.attrs and setting the direction,width,gap properties there

const MyFlexColumn = (
  props: ComponentProps<typeof Flex> // React Spectrum includes layout components to help build Spectrum compliant
) => (
  // applications more easily. The Flex and Grid components are containers,
  // which are responsible for the layout of their children. These components
  // provide props with pre-defined Spectrum variables for sizing, spacing, and
  // other layout options.
  // https://react-spectrum.adobe.com/react-spectrum/layout.html
  <Flex direction="column" width="100%" gap="size-200" {...props}>
    {/* eslint-disable-next-line */}
    {props.children}
  </Flex>
); // The useProvider hook can be used to access the various properties applied by
// the nearest parent Provider. This can be useful for adapting a custom
// component to the current color scheme or scale.

const UseProviderComponentExample = () => {
  const { colorScheme } = useProvider();
  return colorScheme === "dark" ? (
    <Moon aria-label="In dark theme" />
  ) : (
    <Light aria-label="In light theme" />
  );
};

const AdobeExample = () => {
  const [email, setEmail] = useState("");
  const [logicVariant, setLogicVariant] = useState<"or" | "and">("or");
  const [widthValue, setWidthValue] = useState(15);

  return (
    <Provider theme={defaultTheme}>
      <MyFlexColumn>
        <Button
          variant="primary"
          alignSelf="center"
          onPress={() => console.warn("Pressed the button")}
        >
          {defaultTheme.global?.["spectrum--medium"]}
        </Button>

        <Button
          variant="secondary"
          alignSelf="center"
          onPress={() => console.warn("Pressed the button")}
        >
          {defaultTheme.global?.["spectrum--dark"]}
        </Button>
        <Button
          variant="cta"
          alignSelf="center"
          onPress={() => console.warn("Pressed the button")}
        >
          {defaultTheme.global?.spectrum}
        </Button>
        <Button
          variant="negative"
          alignSelf="center"
          onPress={() => console.warn("Pressed the button")}
        >
          {defaultTheme.global?.spectrum}
        </Button>
        {/* <Button
          variant="overBackground"
          alignSelf="center"
          onPress={() => console.warn("Pressed the button")}
        >
          {defaultTheme.global?.["spectrum--light"]}
        </Button>
        <Button
          variant="primary"
          isDisabled
          alignSelf="center"
          onPress={() => console.warn("Pressed the button")}
        >
          {defaultTheme.global?.["spectrum--light"]}
        </Button>
        <Button
          variant="cta"
          isDisabled
          alignSelf="center"
          onPress={() => console.warn("Pressed the button")}
        >
          {defaultTheme.global?.["spectrum--light"]}
        </Button> */}
      </MyFlexColumn>

      <Grid justifyContent="center" gap="size-300">
        {/* CONTENT SECTION */}
        <Heading level={3}>Heading 3</Heading>
        <Content>Content is king</Content>
        <Text>Text is king</Text>
        <Well>
          Better a little which is well done, than a great deal imperfectly.
        </Well>
        <Keyboard>⌘V</Keyboard>

        {/* Icons from action buttons are not provided as properties */}
        <ActionButton justifySelf="start">
          <Book />
          <Text>Icon + Label</Text>
        </ActionButton>
        <ActionGroup selectionMode="single" defaultSelectedKeys={["copy"]}>
          <Item key="edit">
            <Draw />
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy />
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete />
            <Text>Delete</Text>
          </Item>
        </ActionGroup>
        <ActionGroup
          aria-label="Text style"
          overflowMode="collapse"
          selectionMode="multiple"
          isEmphasized
          defaultSelectedKeys={["italic"]}
          summaryIcon={<TextStyle />}
          maxWidth={100}
        >
          <Item key="bold">
            <TagBold />
            <Text>Bold</Text>
          </Item>
          <Item key="italic">
            <TagItalic />
            <Text>Italic</Text>
          </Item>
          <Item key="underline">
            <TagUnderline />
            <Text>Underline</Text>
          </Item>
          <Item key="strike">
            <TextStrikethrough />
            <Text>Strikethrough</Text>
          </Item>
        </ActionGroup>
        <ActionGroup
          overflowMode="collapse"
          orientation="vertical"
          buttonLabelBehavior="hide"
          maxHeight={150}
        >
          <Item key="edit">
            <Draw />
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy />
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete />
            <Text>Delete</Text>
          </Item>
          <Item key="move">
            <Move />
            <Text>Move</Text>
          </Item>
          <Item key="duplicate">
            <Duplicate />
            <Text>Duplicate</Text>
          </Item>
        </ActionGroup>

        <ActionGroup
          density="compact"
          isEmphasized
          selectionMode="single"
          defaultSelectedKeys={["regionSelect"]}
        >
          <Item key="brush" aria-label="Brush">
            <Brush />
          </Item>
          <Item key="select" aria-label="Select">
            <Select />
          </Item>
          <Item key="regionSelect" aria-label="Select Region">
            <RegionSelect />
          </Item>
        </ActionGroup>

        <LogicButton
          justifySelf="start"
          variant={logicVariant}
          onPress={() => setLogicVariant(logicVariant === "or" ? "and" : "or")}
        >
          {logicVariant}
        </LogicButton>
        <ToggleButton isEmphasized defaultSelected justifySelf="start">
          Pin
        </ToggleButton>
        <ActionMenu justifySelf="start">
          <Item key="cut" textValue="cut">
            <Cut size="S" />
            <Text>Cut</Text>
            <Keyboard>⌘X</Keyboard>
          </Item>
          <Item key="copy" textValue="copy">
            <Copy size="S" />
            <Text>Copy</Text>
            <Keyboard>⌘C</Keyboard>
          </Item>
          <Item key="paste" textValue="paste">
            <Paste size="S" />
            <Text>Paste</Text>
            <Keyboard>⌘V</Keyboard>
          </Item>
        </ActionMenu>

        {/* Some of the elements have a lot of intrinsic style prop but they are
         less flexible than CSS, for instance you cannot use padding as 
         a space separated string here, only one value */}
        <View padding="10px">
          <TextField
            validationState="valid"
            label="Name"
            placeholder="John Smith"
          />
        </View>
        <TextField
          label="Name"
          placeholder="John Smith"
          labelPosition="side"
          labelAlign="end"
        />
        {/* You can do calculation though */}
        <View
          width="calc(100% - size-2000)"
          height="single-line-height"
          backgroundColor="green-500"
        />
        <View borderColor="positive">
          <Picker
            label="Choose frequency" // Spectrum allows to specify responsive sizes based on breakpoints,
            // which is kind of nice
            width={{
              base: "size-2000",
              L: "size-5000",
            }}
            description="Pick your favorite animal, you will be judged."
          >
            <Item key="rarely">Rarely</Item>
            <Item key="sometimes">Sometimes</Item>
            <Item key="always">Always</Item>
          </Picker>
        </View>
        <NumberField
          label="Width"
          value={widthValue}
          onChange={setWidthValue}
        />
        <Switch>Low power mode</Switch>
        <TextArea label="Description" />
        <SearchField defaultValue="puppies" label="Search for animals" />
        <RangeSlider label="Range" defaultValue={{ start: 12, end: 36 }} />
        <Slider
          label="Filter density"
          trackGradient={["white", "rgba(177,141,32,1)"]}
          defaultValue={0.3}
          maxValue={1}
          step={0.01}
          formatOptions={{ style: "percent" }}
          isFilled
        />
        <Meter label="Space used" size="S" value={90} variant="critical" />
        <ProgressBar label="Loading…" isIndeterminate />
        <ProgressCircle aria-label="Loading…" isIndeterminate />
        <StatusLight variant="positive">
          Green: Approved, Complete, Success, New, Purchased, Licensed
        </StatusLight>

        <DialogTrigger type="popover">
          <ActionButton>Trigger Popover</ActionButton>
          {(close) => (
            <Dialog size="L">
              <Heading>Internet Speed Test</Heading>
              <Header>Connection status: Connected</Header>
              <Divider />
              <Content>
                <Text>Start speed test?</Text>
              </Content>
              <ButtonGroup>
                <Button variant="secondary" onPress={close}>
                  Cancel
                </Button>
                <Button variant="cta" onPress={close}>
                  Confirm
                </Button>
              </ButtonGroup>
            </Dialog>
          )}
        </DialogTrigger>
        <DialogTrigger type="tray">
          <ActionButton>Check Messages in tray</ActionButton>
          <Dialog>
            <Heading>New Messages</Heading>
            <Divider />
            <Content>
              <Text>You have 5 new messages.</Text>
            </Content>
          </Dialog>
        </DialogTrigger>
        <ContextualHelp variant="info" justifySelf="start">
          <Heading>Need help?</Heading>
          <Content>
            <Text>
              If you&apos;re having issues accessing your account, contact our
              customer support team for help.
            </Text>
          </Content>
        </ContextualHelp>

        {/* Several React Spectrum components include pre-defined
         layouts that you can insert elements into via slots.
         Slots are named areas in a component that receive
         children and provide style and layout for them. */}
        <Picker label="Permission" defaultSelectedKey="read">
          <Item textValue="Read" key="read">
            <Book size="S" />
            <Text>Read</Text>
            <Text slot="description">Read only</Text>
          </Item>
          <Item textValue="Write" key="write">
            <Draw size="S" />
            <Text>Write</Text>
            <Text slot="description">Read and write only</Text>
          </Item>
          <Item textValue="Admin" key="admin">
            <BulkEditUsers size="S" />
            <Text>Admin</Text>
            <Text slot="description">Full access</Text>
          </Item>
        </Picker>
        <Picker label="Pick your favorite">
          <Section title="Animals">
            <Item key="Aardvark">Aardvark</Item>
            <Item key="Kangaroo">Kangaroo</Item>
            <Item key="Snake">Snake</Item>
          </Section>
          <Section title="People">
            <Item key="Danni">Danni</Item>
            <Item key="Devon">Devon</Item>
            <Item key="Ross">Ross</Item>
          </Section>
        </Picker>
        <ComboBox
          label="Preferred fruit or vegetable"
          placeholder="Start typing"
          validationState="valid"
        >
          <Section title="Fruit">
            <Item key="Apple">Apple</Item>
            <Item key="Banana">Banana</Item>
            <Item key="Orange">Orange</Item>
          </Section>
          <Section title="Vegetable">
            <Item key="Cabbage">Cabbage</Item>
            <Item key="Broccoli">Broccoli</Item>
            <Item key="Carrots">Carrots</Item>
          </Section>
        </ComboBox>
        <ActionButton marginStart="size-150" justifySelf="start">
          Submit
        </ActionButton>
        <Provider
          colorScheme="light"
          scale="large"
          breakpoints={{ tablet: 640, desktop: 1024 }}
        >
          <ActionButton margin="size-200">
            I&apos;m a light mobile button
          </ActionButton>
          <Provider colorScheme="dark" scale="medium">
            <ActionButton margin="size-200">
              I&apos;m a dark medium button
            </ActionButton>
          </Provider>
        </Provider>

        {/* Provider can also be used to define common properties for
           a group of components within it. */}
        <Flex direction="column" gap="size-100" alignItems="start">
          <Provider isQuiet>
            <TextField
              label="Email"
              placeholder="example@adobe.com"
              value={email}
              onChange={setEmail}
            />
            <Provider isDisabled={email.length === 0}>
              <Picker label="Favorite color">
                <Item key="magenta">Magenta</Item>
                <Item key="indigo">Indigo</Item>
                <Item key="chartreuse">Chartreuse</Item>
              </Picker>
              <Button variant="primary" isQuiet={false}>
                Submit
              </Button>
            </Provider>
          </Provider>
        </Flex>

        <ListBox
          width="size-2400"
          aria-label="Pick your favorite"
          disabledKeys={["Snake", "Ross"]}
          selectionMode="multiple"
        >
          <Section title="Animals">
            <Item key="Aardvark">Aardvark</Item>
            <Item key="Kangaroo">Kangaroo</Item>
            <Item key="Snake">Snake</Item>
          </Section>
          <Section title="People">
            <Item key="Danni">Danni</Item>
            <Item key="Devon">Devon</Item>
            <Item key="Ross">Ross</Item>
          </Section>
        </ListBox>

        {/* Long press is supported on some menus */}
        <MenuTrigger trigger="longPress">
          <ActionButton
            aria-label="Crop tool"
            onPress={() => console.warn("Cropping!")}
            justifySelf="start"
          >
            <Crop />
          </ActionButton>
          <Menu>
            <Item textValue="Crop Rotate">
              <CropRotate />
              <Text>Crop Rotate</Text>
            </Item>
            <Item textValue="Slice">
              <Slice />
              <Text>Slice</Text>
            </Item>
            <Item textValue="Clone stamp">
              <CloneStamp />
              <Text>Clone Stamp</Text>
            </Item>
          </Menu>
        </MenuTrigger>

        <View overflow="hidden" width="200px">
          <Breadcrumbs showRoot>
            <Item key="home">Home</Item>
            <Item key="trendy">Trendy</Item>
            <Item key="2020 assets">March 2020 Assets</Item>
            <Item key="winter">Winter</Item>
            <Item key="holiday">Holiday</Item>
          </Breadcrumbs>
        </View>

        <TooltipTrigger delay={0}>
          <ActionButton aria-label="Save" justifySelf="start">
            <Draw />
            <Text>Button with Tooltip</Text>
          </ActionButton>
          <Tooltip>Saving applies your new settings right away.</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger delay={0}>
          <ActionButton aria-label="Approve" justifySelf="start">
            <ThumbUp />
          </ActionButton>
          <Tooltip variant="positive" showIcon>
            Approve workflow.
          </Tooltip>
        </TooltipTrigger>

        {/* Only in Beta in April 2022, nice color slider */}
        {/* <Flex direction="column">
          <ColorSlider channel="hue" value={color} onChange={setColor} />
          <ColorSlider channel="saturation" value={color} onChange={setColor} />
          <ColorSlider channel="lightness" value={color} onChange={setColor} />
          <ColorSlider channel="alpha" value={color} onChange={setColor} />
        </Flex> */}

        <Checkbox>Unsubscribe</Checkbox>
        <CheckboxGroup
          label="Favorite sports"
          orientation="horizontal"
          defaultValue={["basketball"]}
        >
          <Checkbox value="soccer">Soccer</Checkbox>
          <Checkbox value="baseball" isDisabled>
            Baseball
          </Checkbox>
          <Checkbox value="basketball">Basketball</Checkbox>
        </CheckboxGroup>

        <AdobeLink>
          <a href="https://www.adobe.com" target="_blank" rel="noreferrer">
            Adobe.com
          </a>
        </AdobeLink>

        <Tabs aria-label="History of Ancient Rome">
          <TabList>
            <Item key="FoR">Founding of Rome</Item>
            <Item key="MaR">Monarchy and Republic</Item>
            <Item key="Emp">Empire</Item>
          </TabList>
          <TabPanels>
            <Item key="FoR">
              Arma virumque cano, Troiae qui primus ab oris.
            </Item>
            <Item key="MaR">Senatus Populusque Romanus.</Item>
            <Item key="Emp">Alea jacta est.</Item>
          </TabPanels>
        </Tabs>

        <Flex direction="column" width="size-2000" gap="size-100">
          <View backgroundColor="celery-600" height="size-800" />
          <View backgroundColor="blue-600" height="size-800" />
          <View backgroundColor="magenta-600" height="size-800" />
        </Flex>

        {/* All props of the Flex and Grid components support object
         syntax to specify different values for the prop depending
         on the responsive breakpoint. */}
        <Grid
          areas={{
            base: ["header", "nav", "content", "footer"],
            M: [
              "header   header",
              "nav      content",
              "nav      content",
              "footer   footer",
            ],
            L: [
              "header header  header",
              "nav    content toc",
              "nav    content toc",
              "footer footer  footer",
            ],
          }}
          columns={{
            M: ["size-2000", "1fr"],
            L: ["size-2000", "1fr", "size-2000"],
          }}
          gap="size-100"
        >
          <View
            backgroundColor="celery-600"
            gridArea="header"
            height="size-1000"
          />
          <View backgroundColor="blue-600" gridArea="nav">
            <Flex
              direction={{
                base: "row",
                M: "column",
              }}
              gap="size-100"
              margin="size-100"
            >
              <View
                backgroundColor="static-gray-50"
                height="size-250"
                minWidth="size-900"
              />
              <View
                backgroundColor="static-gray-50"
                height="size-250"
                minWidth="size-900"
              />
              <View
                backgroundColor="static-gray-50"
                height="size-250"
                minWidth="size-900"
              />
            </Flex>
          </View>
          <View
            backgroundColor="purple-600"
            gridArea="content"
            height="size-4600"
          />
          <View
            backgroundColor="magenta-600"
            gridArea="toc"
            minHeight="size-1000"
            isHidden={{
              base: true,
              L: false,
            }}
          />
          <View
            backgroundColor="seafoam-600"
            gridArea="footer"
            height="size-1000"
          />
        </Grid>
      </Grid>
    </Provider>
  );
};

export { AdobeExample };
